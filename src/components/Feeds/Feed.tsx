import Comments from './Comments'
import { FeedInterface } from '../../utils/interfaces/interface'
import { FeedStyled } from '../../styled/Feed'
import { pathOr } from 'ramda'

export default function Feed({ ...feeddata }: FeedInterface) {
    let url = pathOr('--', ['data', 'url'], feeddata)
    let title = pathOr('--', ['data', 'title'], feeddata)
    let time = parseInt(pathOr('--', ['data', 'time'], feeddata), 10)

    return (
        <FeedStyled href={url} target={'_blank'}>
            <div className={'feed_card'}>
                <h2>{title ? title : '--'}</h2>
                <p>{'--'}</p>
                <Comments time={time} commentscount={0} /> { /* // there are no comments in api */}
            </div>
        </FeedStyled>
    )
}

