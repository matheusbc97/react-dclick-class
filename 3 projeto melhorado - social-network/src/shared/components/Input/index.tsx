import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  margin: 5px 0;
  align-items: center;
  border: 1px solid #e6e6e6;
  width: 100%;
  padding: 5px 5px;
  border-radius: 3px;
`;

const InputHtml = styled.input`
  border: none;
  outline: none;
  width: 100%;
  margin-left: 10px;
`;

type Props = React.InputHTMLAttributes<HTMLInputElement>;

const LoginInput: React.FC<Props> = ({
  onChange,
  value,
  placeholder,
  type,
}) => {
  return (
    <Container>
      <InputHtml
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
};

export default LoginInput;
