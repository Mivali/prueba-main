import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { updateTodoReducer } from '../../redux/todosSlice';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style';
import Octicons from 'react-native-vector-icons/Octicons';


export default function Checkbox({
    id, 
    text,
    isCompleted
}){
    const dispatch = useDispatch();
    const listTodos = useSelector(state => state.todos.todos);

    const pressCheckbox = () => {
        try {
          dispatch(updateTodoReducer({id, isCompleted}));
          AsyncStorage.setItem('Tareas', JSON.stringify(
            listTodos.map(tarea => { 
              if(tarea.id === id) {
                return {...tarea, isCompleted: !tarea.isCompleted};
              }
              return tarea;
            }
          )));
        } catch (e) {
          console.log(e);
        }
      }
    return(
        <TouchableOpacity onPress={pressCheckbox} style={isCompleted?  style.checkboxChecked : style.checkboxNoChecked} >
           {isCompleted && <Octicons name='check' size={16} color='#737373' />}
        </TouchableOpacity>
    )

}