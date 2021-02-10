import { Provider } from 'react-redux';

import Navigation from './Navigation';

import configureStore from './store/configureStore';

function App() {
  return (
    <Provider store={configureStore()}>
      <Navigation />
    </Provider>
  );
}

export default App;
