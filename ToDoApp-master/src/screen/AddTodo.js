import * as React from 'react';
import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodoReducer} from '../../redux/todosSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import style from '../style/style';

export default function AddTodo() {
  const [name, setName] = React.useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listTodos = useSelector(state => state.todos.todos); //accedemos al estado de redux

  const addTodo = async () => {
    const newTask = {
      id: Math.floor(Math.random() * 10000),            //random para generar id
      text: name,
      isCompleted: false,                               //ponemos false porque no se ha completado la tarea todavia
    };
    try {
      await AsyncStorage.setItem(
        'Tareas',
        JSON.stringify([...listTodos, newTask]),
      );                                                //guardamos lo que estaba en el estado de redux MAS el nuevo to do. Lo convertimos a JSON
      dispatch(addTodoReducer(newTask));                //le hacemos saber a redux que le mandamos esta info
      navigation.goBack();
    } catch (e) {
      console.log('Ha surgido un error', e);
    }
  };
  return (
    <View style={style.container_add}>
      <View>
        <Text style={style.title_addTodo}>Añade una nueva tarea</Text>
        <TextInput
          style={style.textinput}
          onChangeText={text => {
            setName(text);
          }}
          autoCapitalize="words"
          maxLength={60}
          multiline={true}
          underlineColorAndroid="transparent"
        />
        <TouchableOpacity style={style.button_add} onPress={addTodo}>
          <Text style={style.add_text_button}>Añadir tarea</Text>
        </TouchableOpacity>
        <View>
        <Image
            source={require('../assets/images/Logoap1.png')}
            style={style.image_add}
          />
        </View>
        <Text style={style.text_name}>To do-ing. 2022</Text>
      </View>
    </View>
  );
}
