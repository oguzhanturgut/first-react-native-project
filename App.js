import React, {useState} from 'react';
import { StyleSheet,Text, View, Button, TextInput} from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const todoInputHandler = todoText => setTodo(todoText);
  const addTodoHandler = () => setTodos(prevTodos =>  [...prevTodos, todo]);

  return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Add new todo..."
                     style={styles.input}
                     onChangeText={todoInputHandler}
          />
          <Button title="ADD" onPress={addTodoHandler}/>
        </View>
        <View>
          {todos.map(todo => <Text key={todo}>{todo}</Text>)}
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  input:{width: '85%', borderColor: 'black', borderWidth: 1, padding: 10}
});
