import React from 'react';
import {StyleSheet,Text, View} from "react-native";

const TodoItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text>{props.text}</Text>
        </View>
    );
};

const styles=StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:'#ccc',
        borderColor:'black',
        borderWidth: 1
    }
});
export default TodoItem;
