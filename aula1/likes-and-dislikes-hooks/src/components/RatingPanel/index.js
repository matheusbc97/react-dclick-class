import React from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

import {Counter, RatingsContainer} from './styles'

export default function RatingPanel({ label="", value=0, onClick, type }) {
    return (
        <RatingsContainer>
            <p>{label}</p>
            <Counter>{value}</Counter>
            <button onClick={onClick}>
                {type === 'like' ? <FaThumbsUp size={40}/> : <FaThumbsDown size={40}/>}
            </button>
        </RatingsContainer>
    )
}
