import React, { useContext } from 'react';

import EntradaDados from '../components/EntradaDados';

import Dados from '../context/Dados';

const EntradaDadosScreen = ({ navigation }) => {
  const { adicionarItem } = useContext(Dados);

  const onAddPress = (value) => {
    adicionarItem(value);
    navigation.navigate('ExibirDados');
  }

  return (
    <EntradaDados onAddPress={onAddPress} />
  );
};

export default EntradaDadosScreen;
