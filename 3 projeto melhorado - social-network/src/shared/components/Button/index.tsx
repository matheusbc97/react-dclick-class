import styled from 'styled-components';

const ButtonStyled = styled.button`
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

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  type = 'button',
  ...rest
}) => {
  return (
    <ButtonStyled type={type} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
