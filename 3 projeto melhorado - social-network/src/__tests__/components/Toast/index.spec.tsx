/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from '@testing-library/react';

import Toast from '../../../components/Toast';

jest.mock('react-redux', () => {
  return {
    useDispatch() {
      return {
        dispatch: jest.fn(),
      };
    },
    useSelector() {
      return {
        active: true,
        text: 'Qualquer texto',
      };
    },
  };
});

describe('Toast Component', () => {
  it('Deve renderizar o component Toast', () => {
    render(<Toast />);
  });

  it('Deve haver o texto no toast', () => {
    const { getByTestId } = render(<Toast />);

    const containerElement = getByTestId('toast-container');

    expect(containerElement).toHaveTextContent('Qualquer texto');
  });
});
