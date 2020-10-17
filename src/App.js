import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { DadosProvider } from './context/Dados';
import HomeScreen from './screens/HomeScreen';
import EntradaDadosScreen from './screens/EntradaDadosScreen';
import ExibirDadosScreen from './screens/ExibirDadosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <DadosProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="EntradaDados" component={EntradaDadosScreen} />
          <Stack.Screen name="ExibirDados" component={ExibirDadosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </DadosProvider>
  );
};
export default App;
