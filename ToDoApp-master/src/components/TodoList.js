import * as React from 'react';
import { data } from '../data/todos';
import { View, Text, FlatList } from 'react-native';
import ToDoItem from './TodoItem';

export default function ToDoList({data}){
    return(
        <FlatList 
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => <ToDoItem id={item.id} text={item.text} isCompleted={item.isCompleted}/>} 
        />
    )
}