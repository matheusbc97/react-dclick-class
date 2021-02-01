import RatingPanel from './components/RatingPanel'
import useAdd from './hooks/useAdd'

import styles from './App.module.scss'

const App = () => {
  const [likes, changeLikes] = useAdd(1)
  const [dislikes, changeDislikes] = useAdd(-1)

  return (
    <div className={styles.container}>
      <p className={styles.title}>Avaliações</p>
      <div className={styles.content}>
        <RatingPanel 
          onClick={changeDislikes} 
          label="Negativas" 
          value={dislikes} 
          type="dislike"
        />
        <RatingPanel 
          onClick={changeLikes} 
          label="Positivas" 
          value={likes} 
          type="like"
        />
      </div>
    </div>
  )
}

export default App