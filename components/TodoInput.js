import React, {useState} from 'react';
import {StyleSheet, Button, TextInput, View} from "react-native";

const TodoInput = (props) => {
    const [todo, setTodo] = useState('');
    const todoInputHandler = todoText => setTodo(todoText);

    return <View style={styles.inputContainer}>
        <TextInput placeholder="Add new todo..."
                   style={styles.input}
                   onChangeText={todoInputHandler}
                   value={todo}
        />
        <Button title="ADD" onPress={props.onAddTodo.bind(this,todo)}/>
    </View>
};

const styles=StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '85%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default TodoInput;
