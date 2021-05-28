import styled from "styled-components";
type Buttontype = {
    isActive?: boolean
}

export const Button = styled.button<Buttontype>`
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
    background-color: ${(props: Buttontype) => props.isActive === true && 'var(--primary-color)'};

    @media (min-width:768px) {
        font-size: 20px;
    }
`