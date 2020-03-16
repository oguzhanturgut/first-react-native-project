import React, {useState} from 'react';
import { StyleSheet, View, Button, TextInput, FlatList} from 'react-native';
import TodoItem from "./components/TodoItem";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = todo => setTodos(prevTodos =>  [...prevTodos, {key:Math.random().toString(), text:todo}]);

    return (
        <View style={styles.screen}>
            <TodoInput onAddTodo={addTodoHandler}/>
            <FlatList data={todos}
                      renderItem={data => <TodoItem text={data.item.text}/>}
            />
        </View>

    );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }
});
