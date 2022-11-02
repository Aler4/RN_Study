import React, {useState} from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';

import {Navbar} from './src/components/Navbar';
import {AddTodo} from './src/components/AddTodo';
import {Todo} from './src/components/Todo';

export interface ITodo {
  id: string;
  title: string;
}
export interface ITodos extends Array<ITodo> {}

const App = () => {
  const [todos, setTodos] = useState<ITodos | []>([]);

  const addTodo = (title: string) => {
    setTodos((prev: ITodos) => [
      ...prev,
      {
        id: Date.now().toString(),
        title: title,
      },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev: ITodos) =>
      prev.filter((todo: ITodo) => (todo as ITodo).id !== id),
    );
  };
  return (
    <SafeAreaView>
      <Navbar />
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo} />

        <FlatList
          keyExtractor={item => item.id}
          data={todos}
          renderItem={({item}) => <Todo todo={item} onRemove={removeTodo} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
    paddingHorizontal: 10,
  },
});

export default App;
