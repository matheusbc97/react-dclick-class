import { render } from '@testing-library/react';

import * as reactRedux from 'react-redux';
import Toast from '../../../components/Toast';

const mockedDispatch = jest.fn();

jest.mock('react-redux', () => {
  return {
    useDispatch() {
      return {
        dispatch: mockedDispatch,
      };
    },
    useSelector: jest.fn(),
  };
});

describe('Toast Component', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector');

  beforeEach(() => {
    useSelectorMock.mockClear();
  });

  it('Deve renderizar o component Toast', () => {
    useSelectorMock.mockReturnValue({
      active: true,
      text: 'Qualquer texto',
    });

    render(<Toast />);
  });

  it('Deve haver o texto no toast', () => {
    useSelectorMock.mockReturnValue({
      active: true,
      text: 'Qualquer texto',
    });

    const { getByTestId } = render(<Toast />);

    const containerElement = getByTestId('toast-container');

    expect(containerElement).toHaveTextContent('Qualquer texto');
  });

  it('Deve retornar null', () => {
    useSelectorMock.mockReturnValue({
      active: false,
      text: '',
    });

    const { container } = render(<Toast />);

    expect(container.innerHTML).toBe('');
  });
});
