import { useState } from 'react'

import RatingPanel from './components/RatingPanel'

import styles from './App.module.scss'

const App = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const like = () => {
    setLikes(likes + 1)
  }

  const dislike = () => {
    setDislikes(dislikes-1)
  }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Avaliações</p>
      <div className={styles.content}>
        <RatingPanel 
          onClick={dislike} 
          label="Negativas" 
          value={dislikes} 
          type="dislike"
        />
        <RatingPanel 
          onClick={like} 
          label="Positivas" 
          value={likes} 
          type="like"
        />
      </div>
    </div>
  )
}

export default App