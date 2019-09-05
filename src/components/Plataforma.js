import React from 'react'
import {Button, ToastAndroid,Alert, Platform} from 'react-native'

export default props =>{

    const notificar = msg =>{
        if(Platform.OS == 'android'){
            ToastAndroid.show(msg,ToastAndroid.LONG)
        }

        if(Platform.OS=='ios'){
            Alert.alert('Informação',msg)
        }
    }

    return(
        <Button onPress={()=> notificar('Parabéns')} title='Plataforma'/>
    )
}