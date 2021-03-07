import { HashRouter } from 'react-router-dom';

import Routes from './Routes';

const Navigation: React.FC = () => {
  return (
    <HashRouter>
      <Routes />
    </HashRouter>
  );
};

export default Navigation;
