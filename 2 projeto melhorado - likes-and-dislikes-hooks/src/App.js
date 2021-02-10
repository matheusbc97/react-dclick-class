import RatingPanel from './components/RatingPanel'
import useAdd from './hooks/useAdd'

import {Container, Content, Title} from './styles'

const App = () => {
  const [likes, changeLikes] = useAdd(1)
  const [dislikes, changeDislikes] = useAdd(-1)

  return (
    <Container>
      <Title>Avaliações</Title>
      <Content>
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
      </Content>
    </Container>
  )
}

export default App