import React from 'react';

import EntradaDados from '../components/EntradaDados';

import { createTask } from '../services/TaskService';

const EntradaDadosScreen = ({ navigation }) => {
  const onAddPress = async (value) => {
    try {
      createTask(value, value);
      navigation.navigate('ExibirDados');
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <EntradaDados onAddPress={onAddPress} />
  );
};

export default EntradaDadosScreen;
