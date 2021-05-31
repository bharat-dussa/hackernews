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
import { Resetbutton } from '../Resetbutton'


function Feeds() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [index, setIndex] = useState<number>(0);
    const [feed, setFeed] = useState<FeedInterface[]>([]);
    const [remainingfeeds, setRemainingFeeds] = useState<FeedInterface[]>([]);
    const [postpath, setPath] = useState<string>('new');
    const [isActive, setActive] = useState<boolean>(true)
    const incrementBy = 50; // increaase to 50 per
    const [showResetbtn, setShowResetbtn] = useState(false)

    

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
            const feeds = await Promise.all(data.data.slice(0,50).map(getSingleFeed));
            return feeds

        } catch (error) {
            setLoading(false)
            setError(error)
            return error
        }

    }
    const getRemainingFeeds = async(value: string) => {
        try{
            setLoading(true)
            const data = await axios.get(`${APP_URI}/${value}stories.json`);
            const feeds = await Promise.all(data.data.slice(50,data.data.length).map(getSingleFeed));
            return feeds
        }
        catch(error){
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
   getRemainingFeeds(postpath)
       .then((res) =>{
           setRemainingFeeds(res)
       })   
    }, [postpath])
    

    const totalFeedLength = feed.length + remainingfeeds.length;
    const currentArticleLoaded = feed.length + index;

    const handleNewPosts = () => {
        setPath(POSTPATH.NEW)
        setIndex(0)
        setActive(true)

    }
    const handlePastPosts = () => {
        setPath(POSTPATH.TOP)
        setIndex(0)
        setActive(false)
    }
    const loadMore = () => {
        // const edgenumber = index + incrementBy;
        // initial = index;
        if(index < totalFeedLength) {
            setIndex(index + incrementBy)
            setShowResetbtn(true)
        }
        
    }

    if (error){
        return <Error  />
    }
    return (
        <FeedContainer>
            <div className={'filter_container'}>
               <Activebutton handleClick={handleNewPosts} isActive={isActive} name={POSTPATH.NEW}/>
               <Activebutton handleClick={handlePastPosts} isActive={!isActive} name={POSTPATH.TOP}/>
            </div>
            {
             isLoading ? <Loader /> : <div className={'feed_section'}>
                    {  
                        feed.map((feeddata:FeedInterface, index1) => {
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
                    {
                      feed.length > 49 && remainingfeeds.slice(0,index).map((feeddata: FeedInterface, index1)=>{
                            return(
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
                    <button disabled={index===totalFeedLength - 1} onClick={loadMore}>{'Load More'}</button>
                </div>
            }
            {
                showResetbtn &&  
                <Resetbutton 
                    totalFeedLength={totalFeedLength}
                    currentArticleLoaded={currentArticleLoaded} 
                    setIndex={setIndex} 
                    setShowResetbtn={setShowResetbtn}
                />
            }

        </FeedContainer>
    )
}

export default Feeds
