import React,{ useState } from 'react';


interface Comments {
    time: number
    commentscount: number
}
// interface formatTime {
//     time: number,
//     value: string
// }
function ComponentName({ time, commentscount }:Comments) {
    // const [formatTime, setformatTime] = useState<formatTime>({
    //     time: 1,
    //     value: 'min ago'
    // })

    const unix_time = time;
    const date = new Date(unix_time * 1000);
    const minutes = date.getMinutes()

    // const [ minutes, hours, seconds ] = [ date.getMinutes(), date.getHours(), date.getSeconds()]
    console.log(minutes) 
    // if(minutes > 60 ){
    //     setformatTime({
    //         time:hours,
    //         value:'hours ago'
    //     })
    // }else if (seconds > 60){
    //     setformatTime({
    //         time:minutes,
    //         value:'hours ago'
    //     })
    // }
    return (
        <>
            <div className={'card_sub_section'}>
                <div className={'card_timer_flex'}>
                    <div className={'card_timer_image'}><img src={'../../../assests/clock.svg'} alt={'clock'} /></div>
                    <div className={'card_timer_flex_span'}><span>{minutes ? minutes : 0 } {'min ago'}</span></div>
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