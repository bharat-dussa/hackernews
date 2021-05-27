/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { FeedContainer } from '../../styled/Feeds/FeedContainer'
import { Button } from '../../styled/utils/Button'
import Feed from './Feed'
import axios from 'axios'
import { APP_URI } from '../../Constants'
import Loader from '../Loader'

function Feeds() {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(10);
    const [feed, setFeed] = useState([]);
    const [postpath, setPath] = useState<string>('new');
    

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
            const feeds = await Promise.all(data.data.slice(0,99).map(getSingleFeed));
            return feeds
            
          } catch (error) {
            setError(true)
            return error
          }

    }
    useEffect(() => {
        getFeeds(postpath)
        .then((res) => {
            console.log('response', res)
            setFeed(res)
            setError(false)
            setLoading(false)
        })
        
        .catch((err)=>{
            console.log('error', err)
        })
    },[postpath])
     
    
    const handleNewPosts = () => {
        setPath('new')
    }
    const handlePastPosts = () => {
        setPath('top')    
    }
    const loadMore = () => {
        setIndex(index + 30)
    }
    interface Feeds {
        by: string,
        time: number,
        title: string,
        type: string,
        url: string
    }
    return (
        <FeedContainer>
            <div className={'filter_container'}>
                <Button  onClick={handleNewPosts}>{'new'}</Button>
                <Button  onClick={handlePastPosts}>{'past'}</Button>
            </div>
            {
                error === false ? isLoading ? <Loader /> : <div className={'feed_section'}>
                    {
                        <>
                           {    
                              feed.slice(0,index).map((feeddata:Feeds,index)=>{
                                let data:any = []
                                data = feeddata
                                return (
                                    <>
                                        {index}
                                        <Feed 
                                            by={data?.data?.by}
                                            time={data?.data?.time}
                                            title={data?.data?.title}
                                            type={data?.data?.type}
                                            url={data?.data?.url}
                                        />
                                    </>
                                )
                              })
                           }
                        </>
                    }
                </div> : <div> 404 ! </div>
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
