import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, Text, View } from 'react-native';

const MostrarDados = ({ items, onRemove }) => {
  const renderizarItem = ({ item }) => {
    return (
      <View key={`${item.id}`}>
        <Text onLongPress={onRemove(item.id)}>
          {item.texto}
        </Text>
      </View>
    );
  }

  return (
    <View>
      {items.length > 0 && (
        <FlatList
          data={items}
          renderItem={renderizarItem}
          ItemSeparatorComponent={() => <View style={{ borderBottomWidth: 2, borderBottomColor: 'green' }} />}
        />
      )}
      {items.length === 0 && (
        <Text>Nenhum item cadastrado.</Text>
      )}
    </View>
  );
};

MostrarDados.propTypes = {
  items: PropTypes.array,
}

MostrarDados.defaultProps = {
  items: []
};

export default MostrarDados;
