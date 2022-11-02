import React from "react";
import {TouchableOpacity, Text, View, StyleSheet} from "react-native";

import {ITodo} from "../../App";

type TProps  = {
   todo: ITodo,
   onRemove: Function
};

export const Todo: React.FC<TProps> = (props) => {
  return (
    <TouchableOpacity
      onLongPress={props.onRemove.bind(null, props.todo.id)}
    >
      <View style={styles.todo}>
        <Text>
          {props.todo.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  }
})
