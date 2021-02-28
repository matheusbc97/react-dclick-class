import { FaFrown } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
`;

const Text = styled.p`
  margin: 0;
  margin-top: 10px;
  font-size: 18px;
  text-align: center;
`;

const ErrorIndicator: React.FC = () => {
  return (
    <Container>
      <FaFrown size={60} />
      <Text>
        {' '}
        Ocorreu um erro inesperado, <br />
        tente recarregar a página novamente mais tarde
      </Text>
    </Container>
  );
};

export default ErrorIndicator;
