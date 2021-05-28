/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { FeedContainer } from '../../styled/Feeds/FeedContainer'
import Feed from './Feed'
import axios from 'axios'
import { APP_URI } from '../../Constants'
import Loader from '../Loader'
import { FeedInterface } from '../../utils/interfaces/interface'
import { POSTPATH } from '../../utils/enum'
import  Error  from '../Error'
import Activebutton from '../Activebutton/index'

function Feeds() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [index, setIndex] = useState<number>(10);
    const [feed, setFeed] = useState<FeedInterface[]>([]);
    const [postpath, setPath] = useState<string>('new');
    const [isActive, setActive] = useState<boolean>(true)
    const incrementBy = 10;
    const [initial, setInitial] = useState<number>(0);

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
            const feeds = await Promise.all(data.data.slice(initial,index).map(getSingleFeed));
            return feeds

        } catch (error) {
            setLoading(false)
            setError(error)
            return error
        }

    }
    
    useEffect(() => {
        getFeeds(postpath)
            .then((res) => {
                setLoading(false)
                setFeed(res)
                setLoading(false)
            })

            .catch((err) => {
                setError(err)
            })
    }, [index, postpath])


    const handleNewPosts = () => {
        setPath(POSTPATH.NEW)
        setActive(true)
    }
    const handlePastPosts = () => {
        setPath(POSTPATH.PAST)
        setActive(false)
    }
    const loadMore = () => {
        const edgenumber = index + incrementBy;
        setInitial(edgenumber);
        setIndex(edgenumber + incrementBy)
    }
    
    if (error){
        return <Error  />
    }
   
    return (
        <FeedContainer>
            <div className={'filter_container'}>
               <Activebutton handleClick={handleNewPosts} isActive={isActive} name={POSTPATH.NEW}/>
               <Activebutton handleClick={handlePastPosts} isActive={!isActive} name={POSTPATH.PAST_NAME}/>
            </div>
            {
                isLoading ? <Loader /> : <div className={'feed_section'}>
                    {
                        feed.slice(0, index).map((feeddata:FeedInterface) => {
                            return (
                                <>
                                    <Feed
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
        </FeedContainer>
    )
}

export default Feeds
