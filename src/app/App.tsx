import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from 'react-query';

import RootStack from '../navigation/RootStack';

Icon.loadFont();

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <RootStack />
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
