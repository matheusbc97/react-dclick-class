import { useEffect, useRef } from 'react';

import styled from 'styled-components';

import Chronometer, { ChronometerHandles } from '../Chronometer';
import useUser from '../../hooks/useUser';

const Header: React.FC = () => {
  const chronometerRef = useRef<ChronometerHandles>(null);

  const { user, resetUser } = useUser();

  useEffect(() => {
    chronometerRef.current?.startChronometer();
  }, []);

  return (
    <Container>
      <UserName>{user && user.name}</UserName>

      <Chronometer ref={chronometerRef} />

      <div style={{ flex: 1 }} />

      <ExitButton onClick={resetUser}>Sair</ExitButton>
    </Container>
  );
};

export default Header;

const ExitButton = styled.button`
  margin-right: 20px;
  background-color: #64b5f6;
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  color: white;
  -webkit-box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 1px 1px 4px 1px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #72b9f2;
  }
`;

const Container = styled.div`
  height: 60px;
  background: #e6e6e6;
  width: 100%;
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  margin: 0;
  margin-left: 20px;
`;
