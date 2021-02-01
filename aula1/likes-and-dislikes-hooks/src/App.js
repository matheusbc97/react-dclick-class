import { useState, useCallback } from 'react'

import RatingPanel from './components/RatingPanel'

import styles from './App.module.scss'

const App = () => {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)

  const like = useCallback(() => {
    setLikes(oldState => oldState + 1)
  }, [setLikes])

  const dislike = useCallback(() => {
    setDislikes(oldState => oldState - 1)
  }, [setDislikes])

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