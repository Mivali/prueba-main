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
      backgroundColor: '#0096C7',
      height: 45,
      width: 340,
      marginLeft: 10,
      borderRadius: 10,
      elevation: 5,
  },

  container_item:{
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '80%',
    textAlign: 'center'
  },

  text:{
      fontSize: 18,
      fontWeight: '600',
      color: '#CAF0F8',
  },

  trashIcon:{
      fontWeight: '600',
      
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

  image: {
    width: 78,
    height: 62,
    alignSelf: 'flex-end'
  },

  container_home:{
      flex: 1,
      paddingTop: 20, 
      paddingHorizontal: 15, 
      backgroundColor: '#0077b6'
  },

  titulo_home:{
      fontSize: 25,
      fontWeight: 'bold',
      marginTop: 40,
      marginBottom: 20,
      color: '#CAF0F8',
  },

  task: {
      position: 'absolute',
      top: 180,
      left: 20,
  },

  button:{
      width: 50,
      height: 50,
      backgroundColor: 'rgba(0, 150, 199, 0)',
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

  container_add:{
    flex: 1, 
    backgroundColor: '#0077b6'
  },

  title_addTodo: {
      fontSize: 25,
      fontWeight: 'bold',
      position:'absolute',
      bottom: -120,
      right: 90,
      marginTop: 10,
      marginBottom: 20,
      color: '#CAF0F8'
  },

  textinput: {
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      position:'absolute',
      bottom: -190,
      height: 40,
      width: '80%',
      borderColor: '#CAF0F8',
      backgroundColor: 'rgba(0, 150, 199, 0.6)',
      fontSize: 18,
      marginTop: 90,
      marginLeft: 37,
      color: '#343a40',
      textAlignVertical: 'top',
  }, 

  button_add: {
      width: 200,
      height: 50,
      backgroundColor: 'rgba(252, 163, 17, 1)',
      borderRadius: 10,
      position: 'absolute',
      bottom: -300,
      right: 110,
      elevation: 5,
  },

  add_text_button: {
      fontSize: 30,
      textAlign: 'center',
      color: '#CAF0F8',
  },

  text_name: {
      fontSize: 14,
      textAlign: 'center',
      color: '#adb5bd',
      position: 'absolute',
      top: 540,
      right: 160,
  },

  image_add:{
    position:'absolute',
    height: 70,
    width: 70,
    top: 460,
    right: 175,

  },

  /*ESTILOS PARA ABOUTSCREEN  */

  container_about:{
    backgroundColor: '#0077b6',
    height: '100%',
  },

  aboutTitle: {
      fontSize: 30,
      textAlign: 'center',
      marginTop: 40,
      color: '#CAF0F8',
  },

  aboutText: {
      marginTop: 50,
      fontSize: 18,
      marginLeft: 16,
      marginRight: 16,
      textAlign: 'justify',
      color: '#CAF0F8',
  },

  linkedinButton: {
      marginTop: 40,
      marginLeft: 190,
      width: 180,
      height: 50,
      borderRadius: 8,
      
  },
  
});

export default style;
