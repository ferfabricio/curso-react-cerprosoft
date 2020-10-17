import React, { createContext, useState } from 'react';

const Dados = createContext();

export const DadosProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [counter, setCounter] = useState(0);

  const adicionarItem = (texto) => {
    console.log(texto);
    setItems([
      ...items,
      {
        id: counter + 1,
        texto
      }
    ]);
    setCounter(counter + 1);
    console.log(items, counter)
  }

  const removerItem = (id) => () => {
    setItems(items.filter(i => i.id !== id));
  }

  const values = {
    items,
    adicionarItem,
    removerItem,
  };

  return (
    <Dados.Provider value={values}>
      {children}
    </Dados.Provider>
  );
};

export default Dados;
