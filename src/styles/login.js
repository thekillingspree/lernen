import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    min-height: ${props => props.height || '250px'};
    justify-content: space-evenly;
    width: 100%;
`