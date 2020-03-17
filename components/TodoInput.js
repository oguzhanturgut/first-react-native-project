import React, { useState } from "react";
import { StyleSheet, Button, TextInput, View, Modal } from "react-native";

const TodoInput = props => {
  const [todo, setTodo] = useState("");
  const todoInputHandler = todoText => setTodo(todoText);
  const addTodoHandler = () => {
    props.onAddTodo(todo);
    setTodo("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Add new todo..."
          style={styles.input}
          onChangeText={todoInputHandler}
          value={todo}
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addTodoHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "85%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10
  },
  buttons: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  button: {
    width: "35%"
  }
});

export default TodoInput;
