import React from 'react';
import type {Node} from 'react';
import {StyleSheet} from 'react-native';


const style = StyleSheet.create({

    /* ESTILOS PARA TODOITEM */
    container:{
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ff8800',
      height: 45,
      width: 340,
      marginLeft: 10,
      borderRadius: 10,
  },

  text:{
      fontSize: 18,
      fontWeight: '400',
      color: '#737373',
  },

  trashIcon:{
      fontSize: 12,
  },

  /*ESTILOS PARA CHECKBOX */

  checkboxChecked:{
      width: 20,
      height: 20,
      marginRight: 13,
      borderRadius: 6,
      backgroundColor: '#ff9f1c',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: .3,
      shadowRadius: 5,
      elevation: 5,
      
  },

  checkboxNoChecked:{
      width: 20,
      height: 20,
      marginRight: 13,
      borderWidth: 2,
      borderColor: '#E8E8E8',
      borderRadius: 6,
      backgroundColor: '#fff',
      marginLeft: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: .1,
      shadowRadius: 5,
      elevation: 5,
  },

  /* ESTILOS PARA HOMESCREEN */

  container_home:{
      flex: 1,
      paddingTop: 30, 
      paddingHorizontal: 15, 
      backgroundColor: '#c0fdff'
  },

  titulo_home:{
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20,
  },

  button:{
      width: 50,
      height: 50,
      backgroundColor: 'rgba(252, 163, 17, 1)',
      borderRadius: 30,
      position: 'absolute',
      bottom: 45,
      right: 30,
      elevation: 5,
  },
  icon_aboutMe:{
      marginBottom: 12,
      marginLeft: 15,
  },

  plus:{
      fontSize: 50,
      color: '#fff',
      top: -12,
      left: 11,
  }, 

  /*ESTILOS PARA ADDTODO */

  title_addTodo: {
      fontSize: 25,
      fontWeight: 'bold',
      position:'absolute',
      bottom: -220,
      right: 90,
      marginTop: 30,
      marginBottom: 20,
  },

  textinput: {
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      position:'absolute',
      bottom: -270,
      height: 40,
      width: '80%',
      borderColor: '#6c757d',
      backgroundColor: 'rgba(252, 163, 17, 0)',
      fontSize: 18,
      marginTop: 90,
      marginLeft: 37,
      color: '#343a40',
  }, 

  button_add: {
      width: 200,
      height: 50,
      backgroundColor: 'rgba(252, 163, 17, 1)',
      borderRadius: 10,
      position: 'absolute',
      bottom: -450,
      right: 110,
      elevation: 5,
  },

  add_text_button: {
      fontSize: 30,
      textAlign: 'center',
      color: '#fff',
  },

  text_name: {
      fontSize: 14,
      textAlign: 'center',
      color: '#adb5bd',
      position: 'absolute',
      top: 680,
      right: 150,
  },

  /*ESTILOS PARA ABOUTSCREEN  */

  aboutTitle: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 40,
      color: '#14213d',
  },

  aboutText: {
      marginTop: 50,
      fontSize: 18,
      marginLeft: 16,
      marginRight: 16,
      textAlign: 'justify'
  },

  githubButton: {
      marginTop: 110,
      marginLeft: 130,
      width: 180,
      height: 30,
      borderRadius: 8,
      backgroundColor: 'rgba(252, 163, 17, 0.6)',
  },

  githubButtonText: {
      fontSize: 18,
      textAlign: 'center',
      fontWeight: 'bold'
  },
  
});

export default style;
