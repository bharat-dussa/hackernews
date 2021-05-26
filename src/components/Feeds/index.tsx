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
    const [index, setIndex] = useState<number>(6);
    const [feed, setFeed] = useState([]);
    const [postpath, setPath] = useState('new');
    

    const getSingleFeed = async (feedId: number) => {
        try {
            const singlefeed = await axios.get(`${APP_URI}/item/${feedId}.json`);
            return singlefeed
            
          } catch (error) {
            return error
          }
    }
    const getFeeds = async (value: string) => {
        // setLoading(true)
        try {
            setLoading(true)
            const data = await axios.get(`${APP_URI}/${value}stories.json`);
            console.log('data',data.data)
            const feeds = await Promise.all(data.data.map(getSingleFeed));
            return feeds
            
          } catch (error) {
            setError(true)
            return error
          }

    }
    useEffect(() => {
        console.log('postpath', postpath)
        getFeeds(postpath)
        .then((res) => {
            setFeed(res)
            setLoading(false)
            setError(false)
        })
        .catch((err)=>{
            console.log('error', err)
        })

   
    },[postpath])
       
    const handleNewPosts = () => {
        console.log('new posts')
        setPath('new')
       
        console.log('feeding', feed)
    }
    const handlePastPosts = () => {
        console.log('past posts')
        // const path = 'top'
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
                            
                              feed.slice(0,index).map((feeddata:Feeds)=>{
                                // console.log('entering into loop', feeddata)
                                let data:any = []
                                data = feeddata
                                console.log("🚀 ~ file: index.tsx ~ line 92 ~ feed.slice ~ data", data.data)
                                
                            
                                return (
                                    <>
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
                feed.length > 0 && <div className={'load_more_btn'}>
                    <button onClick={loadMore}>{'Load More'}</button>
                </div>
            }
        </FeedContainer>
    )
}

export default Feeds
