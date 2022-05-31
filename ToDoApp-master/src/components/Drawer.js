import React, { useState } from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
                    backgroundColor: '#64affa'
                    
                },
                
                drawerActiveTintColor: '#495057',
                drawerInactiveBackgroundColor: '#64affa',
                drawerInactiveTintColor: '#6c757d',
                
            }}
            >
            <DrawerNavigator.Screen name = 'Tareas' component = {HomeScreen} options={{
                
                drawerItemStyle:{
                    marginTop: 180,
                },
                headerShown: true,

                drawerLabel: 'Tareas',
                drawerIcon: ({focused, size}) => (
                    <Ionicons
                        name='ios-reader-outline'
                        size={size}
                        color={focused ? '#c71f37' : '#6c757d'}
                     />
                )
            }}
            />
            <DrawerNavigator.Screen name = 'Tarea nueva' component = {AddTodo} options={{
                
                drawerItemStyle:{
                    marginTop: 10,
                },
                headerShown: true,
                drawerLabel: 'Añadir una tarea',
                drawerIcon: ({focused, size}) => (
                    <MaterialCommunityIcons
                        name='fountain-pen-tip'
                        size={size}
                        color={focused ? '#c71f37' : '#6c757d'}
                     />
                ),
                
            }}
            />
            <DrawerNavigator.Screen name = 'Sobre mí' component = {AboutScreen} options={{
                 drawerItemStyle:{
                    marginTop: 300,
                    marginLeft: 90,
                    width: 110
                },
                drawerLabel: 'Sobre mí',
                
            }}
            />
        </DrawerNavigator.Navigator>

    )
}