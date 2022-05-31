import React from 'react';
import {Text, View, Image, Linking, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from '../style/style';

export default function AboutScreen(){
    return(
        <View style={style.container_about}>
            <Text style={style.aboutTitle}>Sobre mí</Text>
            <Image source={require('../assets/images/proyecto.jpeg')} 
                style={{
                    width: 170,
                    height: 170,                
                    marginTop: 43,
                    marginLeft: 125,
                    borderRadius: 90,
                    overflow: 'hidden', 
                }}
            />
            <Text style={style.aboutText}> ¡Hola! Mi nombre es Miriam, y he desarrollado esta app. Dado que he puesto mucho
                 empeño y esfuerzo, me gustaria que te pusieras en contacto conmigo si encuentras algún fallo.
                  ¡Muchas gracias!</Text>
            <View>
                <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/miriam-guti%C3%A9rrez-arribas-b65a81ab/')}>
                    <AntDesign name='linkedin-square' size={42} style={style.linkedinButton} />
                </TouchableOpacity>
            </View>
                  
        </View>
    )
}