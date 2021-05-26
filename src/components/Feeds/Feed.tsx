import React from 'react'
import styled from 'styled-components'
import Comments from './Comments' 
    
interface Feeds {
    by: string,
    time: number,
    title: string,
    type: string,
    url: string
}

export default function Feed({ by, time, title, type, url}:Feeds) {
   
    return (
        <FeedStyled href={url} target={'_blank'}>
            <div className={'feed_card'}>
                <h2>{title ? title : 'Lorem Ipsum is simply dummy text.'}</h2>
                <p>{title ? title : 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled'}</p> 
                {/* no description in api */}
                <Comments time={time} commentscount={0} /> { /* // there are no comments in api */}
            </div>
        </FeedStyled>
    )
}


const FeedStyled = styled.a`
    border: 19px;
   
    cursor: pointer;
    color:black;
    text-decoration: none;
    margin-top:50px;
.feed_card{
    margin: 20px 0px;
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

        @media (min-width:768px){
            font-size: 20px;
            line-height: 19px;
        }
    }
    p{
    font-family: var(--font-main);
        font-size: 10px;
        line-height: 13.62px;
        font-weight: 400;
        @media (min-width:768px){
            font-size: 18px;
            line-height: 19px;
        }
    }
    span{
        font-size:9px;
        line-height: 10.89px;
        font-weight:400;
        letter-spacing: 0.5px;
        @media (min-width:768px){
            font-size: 16px;
            line-height: 10px;
        }
    }
    .card_sub_section {
        display:flex;
        height:20px;
        width:100%;
        align-items: center;
        gap:6px;
        opacity: 50%;
        color:black;
        text-decoration: none;
        .comments_count {
            display: flex;
        }

        @media (min-width:768px) {
            gap:10px;
        }
    }
    .card_timer_flex{
        display: flex;
        gap:2px;
        @media (min-width:768px) {
            gap:10px;
        }
        .card_timer_image{
            display: flex;
        }
            img{
                width:12px;
                height:12px;
                opacity: 100%;
                @media (min-width:768px) {
                    width:16px;
                    height:16px;
                }
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