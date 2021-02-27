import { useMemo } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

import styled from 'styled-components';

const Container = styled.div`
  padding: 5px 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e6e6e6;
  width: 100%;
  border-radius: 3px;
  padding: 0 5px;
`;

const InputHtml = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px;
`;

const ErrorText = styled.p`
  font-size: small;
  color: red;
  margin: 0;
  margin-left: 5px;
  margin-top: 5px;
`;

type IconType = 'user' | 'lock';

interface LoginIconProps {
  icon: IconType;
}

function LoginIcon({ icon }: LoginIconProps) {
  const isUserIcon = useMemo(() => icon === 'user', [icon]);

  if (isUserIcon) {
    return <FaUser size={23} color="#9e9e9e" />;
  }

  return <FaLock size={23} color="#9e9e9e" />;
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error: string | undefined;
  icon: IconType;
}

function LoginInput({ error, icon, ...rest }: Props): JSX.Element {
  return (
    <Container>
      <Content>
        <LoginIcon icon={icon} />
        <InputHtml {...rest} />
      </Content>
      {!!error && <ErrorText>{error}</ErrorText>}
    </Container>
  );
}

export default LoginInput;
