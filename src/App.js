import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';

import { default as theme } from './custom-theme.json';

import { DadosProvider } from './context/Dados';
import HomeScreen from './screens/HomeScreen';
import EntradaDadosScreen from './screens/EntradaDadosScreen';
import ExibirDadosScreen from './screens/ExibirDadosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <DadosProvider>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="EntradaDados" component={EntradaDadosScreen} />
            <Stack.Screen name="ExibirDados" component={ExibirDadosScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </DadosProvider>
    </ApplicationProvider>
  );
};
export default App;
