import { Provider } from 'react-redux';

import Navigation from './Navigation';

import configureStore from './store/configureStore';

import UserProvider from './providers/UserProvider';

function App() {
  return (
    <Provider store={configureStore()}>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </Provider>
  );
}

export default App;
