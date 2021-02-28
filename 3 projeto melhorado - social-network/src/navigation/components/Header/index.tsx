import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useUser } from 'shared/hooks';
import { Chronometer, ChronometerHandles, Button } from 'shared/components';
import Avatar from 'shared/components/Avatar';

const Header: React.FC = () => {
  const chronometerRef = useRef<ChronometerHandles>(null);

  const { user, resetUser } = useUser();

  useEffect(() => {
    chronometerRef.current?.startChronometer();
  }, []);

  return (
    <Container>
      <UserDataContainer to="/profile">
        <Avatar size={18} />
        <UserName>Olá, {user?.name}</UserName>
      </UserDataContainer>

      <Chronometer ref={chronometerRef} />

      <div style={{ flex: 1 }} />

      <ExitButton onClick={resetUser}>Sair</ExitButton>
    </Container>
  );
};

export default Header;

const ExitButton = styled(Button)`
  margin-right: 20px;
`;

const Container = styled.div`
  padding: 10px 0;
  background: #eee;
  width: 100%;
  display: flex;
  align-items: center;
`;

const UserName = styled.p`
  margin: 0;
  margin-left: 20px;
  font-size: 14px;
  color: #424242;
  margin-top: 5px;
`;

const UserDataContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;
