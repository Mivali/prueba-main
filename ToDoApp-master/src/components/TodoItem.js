import * as React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodoReducer } from '../../redux/todosSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from './Checkbox';
import style from '../style/style';

export default function ToDoItem({id, text, isCompleted}){

    const dispatch = useDispatch(); //avisamos a redux
    const tareas = useSelector(state => state.todos.todos); //para acceder a los todos

    const handleDeleteTodo = async () => {
        dispatch(deleteTodoReducer(id));
        try {
          await AsyncStorage.setItem('Tareas', JSON.stringify(tareas.filter(todos => todos.id !== id)));
          
        } catch (e) {
          console.log(e);
        }
      }

    return(
        <View style={style.container}>
          <View style={{flexDirection:'row'}}>
            <Checkbox id={id} text={text} isCompleted={isCompleted} />
            <Text style={ isCompleted ? [style.text, {textDecorationLine: 'line-through', color: '#73737340'}] : style.text}>{text}</Text>
          </View>
            <TouchableOpacity onPress={handleDeleteTodo}>  
              <AntDesign name='delete' size={16} color='#737373' /> 
            </TouchableOpacity>
        </View>        
    );
}