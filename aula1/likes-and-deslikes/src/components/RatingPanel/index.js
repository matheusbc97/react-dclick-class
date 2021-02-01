import React from 'react'
import {FaThumbsUp, FaThumbsDown} from 'react-icons/fa'

import styles from './RatingPanel.module.css'

export default function RatingPanel({ label="", value=0, onClick, type }) {
    return (
        <div className={styles.ratingsContainer}>
            <p>{label}</p>
            <p className={styles.counter}>{value}</p>
            <button onClick={onClick}>
                {type === 'like' ? <FaThumbsUp size={40}/> : <FaThumbsDown size={40}/>}
            </button>
        </div>
    )
}
