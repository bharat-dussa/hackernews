import React from 'react'
import { FeedContainer } from '../../styled/Feeds/FeedContainer'
import { Button } from '../../styled/utils/Button'
import Feed from './Feed'

function Feeds() {
    return (
        <FeedContainer>
            <div className={'filter_container'}>
                <Button>{'new'}</Button>
                <Button>{'past'}</Button>
            </div>

            <div className={'feed_section'}>
                {
                   <>
                     <Feed /> <Feed /> <Feed /> <Feed />
                   </>
                }
            </div>
            <div className={'load_more_btn'}>
                    <button>Load More</button>
            </div>
        </FeedContainer>
    )
}

export default Feeds
