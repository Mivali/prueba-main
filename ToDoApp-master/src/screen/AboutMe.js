import React from 'react';
import {Text, View, Image, Linking, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import style from '../style/style';

export default function AboutScreen(){
    return(
        <View>
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
                  
            <TouchableOpacity
                style={style.githubButton}
                onPress={() => Linking.openURL('https://github.com/Mivali') }
                        title="GitHub">               
                <Text style={style.githubButtonText}>Mi cuenta de GitHub</Text>
            </TouchableOpacity>

            
            

        </View>
    )
}