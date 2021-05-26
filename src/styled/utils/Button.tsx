import styled from "styled-components";

export const Button = styled.button`
    text-transform: capitalize;
    border-radius: 12px;
    /* background: transparent; */
    border: none;
    padding:4px 12px;
    color:var(--black-text);
    font-size:16px;
    line-height: 100%;
    font-weight: 700;
    cursor: pointer;
   

    :focus, :active,:target {
        background-color: var(--primary-color);
    }

    .active-new {
        background-color: var(--primary-color);
    }
    .active-past{
        background-color: var(--primary-color);
    }

    @media (min-width:768px) {
        font-size: 20px;
    }
`