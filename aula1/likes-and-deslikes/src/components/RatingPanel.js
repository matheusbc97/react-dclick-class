import React from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

export default function RatingPanel({ label="", value=0, onClick, type }) {
    return (
        <div className="ratings-container">
            <p>{label}</p>
            <p className="counter">{value}</p>
            <button onClick={onClick}>
              {type === 'like' ? <FaThumbsUp size={40}/> : <FaThumbsDown size={40}/>}
            </button>
          </div>
    )
}
