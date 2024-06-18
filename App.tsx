import React from 'react';


import RootNavigator from './src/navigation/RootNavigator';
import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from "redux-persist/integration/react";
function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider >
  )



}

export default App;
