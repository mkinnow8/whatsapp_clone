import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import {MyProvider} from './src/context/globalContext';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <MyProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <RootNavigator />
      </GestureHandlerRootView>
    </MyProvider>
  );
}

export default App;
