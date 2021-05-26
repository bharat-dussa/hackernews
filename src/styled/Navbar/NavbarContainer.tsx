import styled from 'styled-components'

export const NavbarContainer = styled.nav`
    /* color:red; */

    .navbar_logo {
        background:url('../../../assests/header_logo.svg') no-repeat center;
        height:15vh;
        width:100%;
        box-shadow: 0px 3px 28px rgba(0,0,0,0.08);
        margin-bottom:2rem;
        @media (min-width:768px) {
            height:15vh;
        }
    }
`
