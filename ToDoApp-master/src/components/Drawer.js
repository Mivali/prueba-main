import React, { useState } from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screen/Home';
import AboutScreen from '../screen/AboutMe';
import AddTodo from '../screen/AddTodo';

const DrawerNavigator = createDrawerNavigator();

export default function Drawer(){

    return(

        <DrawerNavigator.Navigator  drawerPosition="left"  initialRouteName='Tareas'       
            screenOptions={{

                drawerType:"back",

                drawerContentStyle:{
                    backgroundColor: '#dee2e6'
                    
                },
                //drawerActiveBackgroundColor: '#dee2e6',
                drawerActiveTintColor: '#495057',
                drawerInactiveBackgroundColor: '#dee2e6',
                drawerInactiveTintColor: '#6c757d',
                
            }}
            >
            <DrawerNavigator.Screen name = 'Tareas' component = {HomeScreen} options={{
                
                drawerItemStyle:{
                    marginTop: 180,
                },

                drawerLabel: 'Tareas',
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                        name='person'
                        size={size}
                        color={focused ? '#c71f37' : '#6c757d'}
                     />
                )
            }}
            />
            <DrawerNavigator.Screen name = 'Tarea nueva' component = {AddTodo} options={{
                
                drawerItemStyle:{
                    marginTop: 180,
                },

                drawerLabel: 'Añadir una tarea',
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                        name='person'
                        size={size}
                        color={focused ? '#c71f37' : '#6c757d'}
                     />
                )
            }}
            />
            <DrawerNavigator.Screen name = 'Sobre mí' component = {AboutScreen} options={{
                 drawerItemStyle:{
                    marginTop: 350,
                    marginLeft: 90,
                    width: 110
                },
                drawerLabel: 'Sobre mí'
            }}
            />
        </DrawerNavigator.Navigator>

    )
}