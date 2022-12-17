/**
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigation from './src/navigation/RootNavigation';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="black" />
      <SafeAreaProvider>
        <RootNavigation />
      </SafeAreaProvider>
    </SafeAreaView>
  );
};

export default App;
