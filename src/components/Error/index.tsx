import React from 'react'
import styled from 'styled-components'

function Error() {
   
    return (
        <ErrorContainer>
            <div className={'error_container'}>
                Unable to Fetch the Data
            </div>
        </ErrorContainer>
    )
}


export default Error;

const ErrorContainer = styled.section`
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
`