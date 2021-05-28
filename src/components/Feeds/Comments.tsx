import { Comments } from '../../utils/interfaces/interface'

const ComponentName:React.FC<Comments> = ({ time, commentscount }:Comments) => {
    const unix_time:number = time;
    const date:Date = new Date(unix_time * 1000);
    const minutes:number = date.getMinutes()

    let minutesago = minutes ? minutes : 0;
    
    return (
        <>
            <div className={'card_sub_section'}>
                <div className={'card_timer_flex'}>
                    <div className={'card_timer_image'}><img src={'../../../assests/clock.svg'} alt={'clock'} /></div>
                    <div className={'card_timer_flex_span'}><span>{minutesago} {'min ago'}</span></div>
                </div>
                <div className={'vertical'}></div>
                <div className={'comments_count'}>
                    <span>{commentscount} comments</span>
                </div>
            </div>
        </>
    );
}

export default ComponentName