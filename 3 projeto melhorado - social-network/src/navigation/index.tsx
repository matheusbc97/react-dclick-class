import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';

const Navigation: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};

export default Navigation;
