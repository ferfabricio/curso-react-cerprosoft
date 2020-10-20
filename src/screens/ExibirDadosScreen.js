import React, { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import { getAllTasks } from '../services/TaskService';

import MostrarDados from '../components/MostrarDados';
import Dados from '../context/Dados';

const ExibirDadosScreen = () => {
  const { items, setItems, removerItem } = useContext(Dados);

  useEffect(() => {
    async function getData () {
      try {
        const result = await getAllTasks();
        setItems(result.data);
      } catch (e) {
        console.error(e);
      }
    }
    getData();
  }, []);

  if (items.length > 0) {
    return (
      <>
        <MostrarDados items={items} onRemove={removerItem} />
      </>
    );
  } else {
    return (
      <>
        <Text>Carregando</Text>
      </>
    );
  }
};

export default ExibirDadosScreen;
