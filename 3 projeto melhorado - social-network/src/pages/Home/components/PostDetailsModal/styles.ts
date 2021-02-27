import styled from 'styled-components';

const transitionName = 'modal';

export const Container = styled.div`
  background: white;
  width: 75%;
  max-width: 600px;
  max-height: 75%;
  padding: 30px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
`;

export const Background = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;

  &.${transitionName}-enter {
    opacity: 0;

    ${Container} {
      background: red;
    }
  }

  &.${transitionName}-enter-active {
    opacity: 1;
    transition: opacity 300ms;

    ${Container} {
      background: red;
    }
  }

  &.${transitionName}-exit {
    opacity: 1;

    ${Container} {
      background: red;
    }
  }

  &.${transitionName}-exit-active {
    opacity: 0;

    transition: opacity 300ms;

    ${Container} {
      background: red;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.div`
  background-color: #bdbdbd;
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 20px;
  margin: 10px 0;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`;

export const Text = styled.p`
  margin: 5px 0;
`;

export const WroteAtText = styled.p`
  margin: 0;
  margin-top: 15px;
  font-size: 16px;
  color: #9e9e9e;
  align-self: flex-end;
`;

export const Content = styled.div`
  overflow-y: auto;
  height: 100%;
`;
