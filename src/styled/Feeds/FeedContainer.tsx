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
`
export const Pagination = styled.div`
    
`
