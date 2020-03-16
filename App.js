import React, {useState} from 'react';
import { StyleSheet,Text, View, Button, TextInput, ScrollView, FlatList} from 'react-native';

export default function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);
  const todoInputHandler = todoText => setTodo(todoText);
  const addTodoHandler = () => setTodos(prevTodos =>  [...prevTodos, {key:Math.random().toString(), text:todo}]);

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Add new todo..."
                           style={styles.input}
                           onChangeText={todoInputHandler}
                />
                <Button title="ADD" onPress={addTodoHandler}/>
            </View>
            <FlatList data={todos}
                      renderItem={data => <View style={styles.listItem}><Text>{data.item.text}</Text></View>}
            />
        </View>

    );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  },
  inputContainer:{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'},
  input:{width: '85%', borderColor: 'black', borderWidth: 1, padding: 10}, listItem:{padding:10, marginVertical:10, backgroundColor:'#ccc', borderColor:'black', borderWidth: 1}
});
