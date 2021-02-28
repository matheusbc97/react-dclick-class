import { render } from '@testing-library/react';

import * as reactRedux from 'react-redux';
import Toast from 'shared/components/ToastList/Toast';

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
    render(
      <Toast
        toast={{
          text: 'Qualquer texto',
          type: 'danger',
        }}
      />,
    );
  });

  it('Deve haver o texto no toast', () => {
    useSelectorMock.mockReturnValue({
      active: true,
      text: 'Qualquer texto',
    });

    const { getByTestId } = render(
      <Toast
        toast={{
          text: 'Qualquer texto',
          type: 'danger',
        }}
      />,
    );

    const containerElement = getByTestId('toast-container');

    expect(containerElement).toHaveTextContent('Qualquer texto');
  });
});
