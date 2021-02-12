import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store/configureStore';

import './styles.css';

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ScreenLoading: React.FC = () => {
  const active = useSelector((state: RootState) => state.screenLoading.active);

  if (!active) {
    return null;
  }

  return (
    <Container>
      <div className="lds-roller">
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </Container>
  );
};

export default ScreenLoading;
