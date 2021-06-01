/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
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
    const [contentPerPage, setContentPerPage]=useState<number>(10);
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [index, setIndex] = useState<number>(contentPerPage);
    const [feed, setFeed] = useState<FeedInterface[]>([]);
    const [postpath, setPath] = useState<string>('new');
    const [isActive, setActive] = useState<boolean>(true)
    const incrementBy = 10; // increaase to 50 per
    const [initial, setInitial] = useState<number>(0);
    const [totalResponseLength, setTotalResponseLength] = useState<number>(0);
    const [newsIds, setNewsids]= useState<number[]>([]);
   
    const getSingleFeed = async (feedId: number) => {
        try {
            const singlefeed = await axios.get(`${APP_URI}/item/${feedId}.json`);
            return singlefeed

        } catch (error) {
            return error
        }
    }
    const getFeeds = async (newIdsArray: number[], firstindex:number, lastinitial:number) => {
        try {
            setLoading(true)
            const feeds = await Promise.all(newIdsArray.slice(lastinitial, firstindex).map(getSingleFeed));
            return feeds

        } catch (error) {
            setLoading(false)
            setError(error)
            return error
        }

    }

    useEffect(()=>{
        async function getIds(){
            const data = await (await fetch(`${APP_URI}/${postpath}stories.json`)).json()
            
            return data
        }
        getIds()
            .then((res)=>{
                setNewsids(res)
            })

            return(()=>{
                setNewsids([])
            })
    }, [postpath])

    useEffect(() => {
        
            getFeeds(newsIds, contentPerPage, initial )
            .then((res) => {
                setLoading(false)
                setFeed(res)
                setLoading(false)
                setTotalResponseLength(newsIds.length)
            })

            .catch((err) => {
                setError(err)
            })
    }, [newsIds,index,initial,contentPerPage])

    const handleNewPosts = () => {
        setInitial(0);
        setIndex(10);
        setNewsids([])
        setPath(POSTPATH.NEW)
        setActive(true)

    }
    const handlePastPosts = () => {
        setPath(POSTPATH.TOP)
        setInitial(0);
        setNewsids([])
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

    const handleChange = (selectedOption:React.FormEvent<HTMLSelectElement>) => {
        var targetnode:string = selectedOption.currentTarget.value;
        setContentPerPage(parseInt(targetnode));
        setIndex(contentPerPage);
    }

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
                    
                    <div>
                        <select value={contentPerPage} onChange={(e)=>handleChange(e)}>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </div>
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
