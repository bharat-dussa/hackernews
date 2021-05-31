/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { FeedContainer } from '../../styled/Feeds/FeedContainer'
import Feed from './Feed'
import axios from 'axios'
import { APP_URI } from '../../Constants'
import Loader from '../Loader'
import { FeedInterface } from '../../utils/interfaces/interface'
import { POSTPATH } from '../../utils/enum'
import Error from '../Error'
import Activebutton from '../Activebutton/index'


function Feeds() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [index, setIndex] = useState<number>(10);
    const [feed, setFeed] = useState<FeedInterface[]>([]);
    const [postpath, setPath] = useState<string>('new');
    const [isActive, setActive] = useState<boolean>(true)
    const incrementBy = 10; // increaase to 50 per
    const [initial, setInitial] = useState<number>(0);
    const [totalResponseLength, setTotalResponseLength] = useState<number>(0);

    const getSingleFeed = async (feedId: number) => {
        try {
            const singlefeed = await axios.get(`${APP_URI}/item/${feedId}.json`);
            return singlefeed

        } catch (error) {
            return error
        }
    }
    const getFeeds = async (value: string) => {
        try {
            setLoading(true)
            const data = await axios.get(`${APP_URI}/${value}stories.json`);
            const feeds = await Promise.all(data.data.slice(initial, index).map(getSingleFeed));
            return [feeds, data]

        } catch (error) {
            setLoading(false)
            setError(error)
            return error
        }

    }
    useEffect(() => {
        getFeeds(postpath)
            .then((res) => {
                console.log('res[0]', res[0])
                console.log('res[1]', res[1])
                setLoading(false)
                setFeed(res[0])
                setLoading(false)
                setTotalResponseLength(res[1].data.length)
            })

            .catch((err) => {
                setError(err)
            })
    }, [index, postpath])

    const handleNewPosts = () => {
        setInitial(0);
        setIndex(10);
        setPath(POSTPATH.NEW)
        setActive(true)

    }
    const handlePastPosts = () => {
        setPath(POSTPATH.TOP)
        setInitial(0);
        setIndex(10);
        setActive(false)
    }
    const loadMore = () => {
        const edgenumber = index;
        setInitial(edgenumber);
        setIndex(edgenumber + incrementBy)
        window.scrollTo(0, 0)
    }
    const handleReset = () => {
        setInitial(0);
        setIndex(10);
        window.scrollTo(0, 0)
    }
    if (error) {
        return <Error />
    }
    const totalPages = totalResponseLength / 10;

    console.log('index value:', index);
    return (
        <FeedContainer>
            <div className={'filter_container'}>
                <Activebutton handleClick={handleNewPosts} isActive={isActive} name={POSTPATH.NEW} />
                <Activebutton handleClick={handlePastPosts} isActive={!isActive} name={POSTPATH.TOP} />
            </div>
            {
                isLoading ? <Loader /> : <div className={'feed_section'}>
                    {
                        feed.map((feeddata: FeedInterface, index1) => {
                            return (
                                <>
                                    <Feed
                                        key={index1}
                                        {...feeddata}
                                    />
                                </>
                            )
                        })
                    }
                </div>

            }
            {
                isLoading === false && feed.length > 5 && <div className={'load_more_btn'}>
                    <button onClick={loadMore}>{'Load More'}</button>
                </div>
            }
            {   isLoading===false &&
                <div className={'collapse_btn'}>
                    <div className={'pagination_'}>
                        pages: <span>{index / 10}</span> / <span>{totalPages}</span>
                    </div>

                    <div>
                        <button onClick={handleReset}><img src="https://img.icons8.com/ios-glyphs/26/000000/available-updates.png" alt="reset" /></button>
                    </div>
                </div>
            }

        </FeedContainer>
    )
}

export default Feeds
