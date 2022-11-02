import React, {useState} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';

interface Props {
  onSubmit: (title: string) => void;
}
export const AddTodo = (props: Props) => {
  const [value, setValue] = useState<string | undefined>('');
  const pressHandler = () => {
    if ((value as string).trim()) {
      props.onSubmit(value as string);
      setValue('');
    } else {
      Alert.alert('Can.t be empty');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={setValue}
        value={value}
        style={styles.input}
        placeholder="Add todo"
        autoCorrect={false}
      />
      <TouchableOpacity style={styles.button} onPress={pressHandler}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    paddingLeft: 10,
    borderBottomWidth: 2,
    borderColor: 'rgb(150,150,150)',
  },
  button: {
    width: 50,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8bd7f9',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
});
