import React from 'react';
import { SafeAreaView } from 'react-native'
import { Button, TopNavigation } from '@ui-kitten/components'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='MyApp' alignment='center'/>
      <Button onPress={() => navigation.navigate('EntradaDados')}>Entrada Dados</Button>
      <Button onPress={() => navigation.navigate('ExibirDados')}>Exibir Dados</Button>
    </SafeAreaView>
  );
};

export default HomeScreen;
