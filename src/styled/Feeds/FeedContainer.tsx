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
        /* display: flex;
        justify-content: flex-end; */
        /* margin-top:50px; */
        position: fixed;
        bottom:100px;
        right:40px;
        cursor:pointer;
        justify-content: center;
        align-items: center;
        text-align: right;
        z-index:2;
        .pagination_ {
            text-align: center;
            background-color: white;
            border-radius: 7px;
            transition: opacity 1s ease-in-out;
            box-shadow: 0px 9px 25px 0 #1d1c2247;
            outline:none;
            width:200px;
            height:40px;
            margin-bottom:10px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        button{
            background-color:white;
            cursor:pointer;
            border:none;
            width:50px;
            height:50px;
            border-radius: 7px;
            transition: opacity 1s ease-in-out;
            box-shadow: 0px 9px 25px 0 #1d1c2247;
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
