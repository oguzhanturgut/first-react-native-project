import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addTodoHandler = todo => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: todo }
    ]);
    setIsAddMode(false);
  };

  const removeTodoHandler = id =>
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));

  const cancelTodoAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add new todo" onPress={() => setIsAddMode(true)} />
      <TodoInput
        onAddTodo={addTodoHandler}
        visible={isAddMode}
        onCancel={cancelTodoAdditionHandler}
      />
      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={data => (
          <TodoItem
            text={data.item.text}
            id={data.item.id}
            onDelete={removeTodoHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
