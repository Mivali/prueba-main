import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import ToDoList from '../components/TodoList';
import { data } from '../data/todos';
import style from '../style/style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native'; //es un hook
import { useSelector, useDispatch } from 'react-redux';
import { setTodosReducer } from '../../redux/todosSlice'; //importamos el redux de lo que vayamos a hacer
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen(){
  
    const tareas = useSelector(state => state.todos.todos); //guardamos las tareas en el selector de redux
    const navigation = useNavigation();
    const dispatch = useDispatch(); //lo declaramos para poder usarlo

    React.useEffect(() => {
      const getTodo = async () => { 
        try{
          const tareas = await AsyncStorage.getItem("Tareas");
          if(tareas !== null){
            dispatch(setTodosReducer(JSON.parse(tareas))) //avisamos al redux y convertimos el json en objeto de js
          }
        }catch (e) {
          console.log(e);
        } 
      }
      getTodo();
    }, []);

    return(
        <View style={style.container_home}>
            <Text style={style.titulo_home}> Aquí están tus tareas </Text>
          <ToDoList data={tareas}/> 
          {/* 
          <TouchableOpacity 
            onPress={() => navigation.navigate("Añadir tareas")}  //data lo igualamos a la variable tareas, que es la que recoge los todos que se guardaron previamente en el redux
            style={style.button}>    
            <Text style={style.plus}>+</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => navigation.navigate("Sobre mi")}
            style={style.icon_aboutMe}>
            <Ionicons name='information-circle-outline' size={28} color='#737373' /> 
          </TouchableOpacity>  
          */}
          <Text style={style.text_name}>
                To do-ing. 2022
          </Text>                
        </View>
      )
}