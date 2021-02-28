import { useSelector } from 'react-redux';
import { RootState } from 'store/configureStore';

import { Background, Container } from './styles';

const ScreenLoading: React.FC = () => {
  const active = useSelector((state: RootState) => state.screenLoading.active);

  if (!active) {
    return null;
  }

  return (
    <Background>
      <Container>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </Container>
    </Background>
  );
};

export default ScreenLoading;
