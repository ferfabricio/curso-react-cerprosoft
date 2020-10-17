import React from 'react';
import { Button, SafeAreaView } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Button title="Entrada Dados" onPress={() => navigation.navigate('EntradaDados')} />
      <Button title="Exibir Dados" onPress={() => navigation.navigate('ExibirDados')} />
    </SafeAreaView>
  );
};

export default HomeScreen;
