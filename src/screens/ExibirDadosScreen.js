import React, { useContext } from 'react';

import MostrarDados from '../components/MostrarDados';
import Dados from '../context/Dados';

const ExibirDadosScreen = () => {
  const { items, removerItem } = useContext(Dados);

  return (
    <MostrarDados items={items} onRemove={removerItem} />
  );
};

export default ExibirDadosScreen;
