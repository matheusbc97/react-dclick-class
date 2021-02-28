import styled from 'styled-components';

interface ContainerProps {
  size: number;
}

export const Container = styled.div<ContainerProps>`
  background-color: #bdbdbd;
  width: ${(props) => props.size * 2}px;
  height: ${(props) => props.size * 2}px;
  border-radius: ${(props) => props.size}px;
`;

interface Props {
  size?: number;
}

const Avatar: React.FC<Props> = ({ size = 40 }) => {
  return <Container size={size} />;
};

export default Avatar;
