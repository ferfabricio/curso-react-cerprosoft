import React, { useState } from 'react';
import PropTypes from 'prop-types'
import {
  Button,
  Text,
  TextInput,
  View,
  StyleSheet,
} from 'react-native';

const EntradaDados = ({ onAddPress }) => {
  const [value, setValue] = useState('');

  const onPressAction = () => {
    onAddPress(value);
    setValue('');
  }

  return (
    <View>
      <Text style={style.label}>
        Digite o texto da tarefa:
      </Text>
      <TextInput
        style={style.textInput}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      <Button title="Adicionar" onPress={onPressAction} />
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    fontSize: 18,
  },
  textInput: {
    borderBottomColor: 'red',
    borderWidth: 2,
    borderRadius: 5,
  }
});

EntradaDados.propTypes = {
  onAddPress: PropTypes.func.isRequired
};

export default EntradaDados;
