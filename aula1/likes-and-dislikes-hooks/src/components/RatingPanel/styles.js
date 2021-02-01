import styled from 'styled-components'

export const Counter = styled.p`
    font-size: 45px;
    margin: 0;
    margin-top: 5px;
`

export const RatingsContainer  = styled.div`
    padding: 5px 40px 20px 40px;
    border: 1px solid #424242;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
        margin-top: 10px;
        font-size: 18px;
        cursor: pointer;
        background: none;
        border: none;
        outline: none;
    }

    & + &{
        margin-left: 30px;
    }
`