import styled from "styled-components";

export const FeedContainer = styled.main`
    color:var(--grey-text);
    /* opacity: 80%; */
    margin: 20px 16px;
    transition: margin 2s;
    .filter_container {
        display: flex;
        gap:07px;
        margin:16px 18px;
    }
    .load_more_btn {
        display: flex;
        margin-top:29px;
        button{
            cursor: pointer;
            width: 100%;
            border-radius: 12px;
            border: none;
            background-color: var(--primary-color);
            padding:10px 20px;  
            font-size :16px;
            line-height: 21.79px;
            font-weight:700;
        }
    }


    .collapse_btn {
       display: flex;
       margin-top:40px;
       align-items: flex-start;
       width:100%;
       height: 100%;
       justify-content: center;
       gap:10px;
       /* justify-content */
       align-items: center;
        .pagination_ {
            /* width:100px; */
            display: flex;
            text-align: center;
            justify-content: center;
            gap:20px;
            border-radius: 7px;
        }
        span{
           
        }
        button{
            background-color:white;
            cursor:pointer;
            border:none;
            width:50px;
            height:50px;
            border-radius: 7px;
            transition: opacity 1s ease-in-out;
           
            outline:none;

            :hover{
                ::before{
                    content: 'reset';
                    transition: content 2s;
                }
            }
        }
    }
`
