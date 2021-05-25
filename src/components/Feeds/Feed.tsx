import React from 'react'
import styled from 'styled-components'

export default function Feed() {


    return (
        <FeedStyled>
            <div className={'feed_card'}>
                <h2>Lorem Ipsum is simply dummy text.</h2>
                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled</p>
                <div className={'card_sub_section'}>
                    <div className={'card_timer_flex'}>
                        <div><img src={'../../../assests/clock.svg'} alt={'clock'}/></div>
                        <div className={'card_timer_flex_span'}><span>1 min ago</span></div>
                    </div>
                    <div className={'vertical'}></div>
                    <div className={'comments_count'}>
                        <span>50 comments</span>
                    </div>
                </div>
            </div>
        </FeedStyled>
    )
}


const FeedStyled = styled.div`
    border: 19px;
    margin: 20px 0px;
.feed_card{

    background-color: #FFFFFF;
    border-radius: 12px;
    box-shadow:0px 3px 28px rgba(0,0,0,0.08);
    padding: 16px;
    text-align: left;
    font-family: var(--font-main);
    display: flex;
    flex-direction: column;
    h2 {
        font-family: var(--font-main);
        font-size: 12px;
        line-height: 16.34px;
        font-weight: 700;
    }
    p{
        font-size: 10px;
        line-height: 13.62px;
        font-weight: 400;
    }
    span{
        font-size:9px;
        line-height: 10.89px;
        font-weight:400;
        letter-spacing: 0.5px;
    }
    .card_sub_section {
        display:flex;
        /* justify-content: center; */
        height:20px;
        width:100%;
        align-items: center;
        gap:6px;
        opacity: 50%;
        .comments_count {
            display: flex;
        }
    }
    .card_timer_flex{
        display: flex;
        gap:2px;

            img{
                width:12px;
                height:12px;
                opacity: 100%;
            }
        .card_timer_flex_span{
            display: flex;
            align-items: center;
        }
    }

    .vertical {
        border-left:0.5px solid black;
        height:100%;
        /* position: absolute; */

    }
}

`