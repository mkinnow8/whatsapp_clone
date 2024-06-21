import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {MyProvider} from './src/context/globalContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';


import { Provider } from 'react-redux';
import store, { persistor } from './src/redux/store';
import { PersistGate } from "redux-persist/integration/react";
function App(): React.JSX.Element {
  return (
    

    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <MyProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <RootNavigator />
        </GestureHandlerRootView>
      </MyProvider>
      </PersistGate>
    </Provider >
    );



}

export default App;
