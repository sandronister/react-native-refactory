import React from 'react'
import {Text} from 'react-native'

import Padrao from '../estilo/Padrao'


export const Inverter = params =>{
    const inv = params.texto.split('').reverse().join('')
    return <Text style={Padrao.ex}>{inv}</Text> 
}

export const Megasega = params =>{
    const [min,max] = [1,60]
    const numeros = Array(params.numeros || 6).fill(0)

    console.log(this.props)

    for(let i=0;i< numeros.length;i++){
        let novo =0 

        while(numeros.includes(novo)){
            novo = Math.floor(Math.random() * (max-min-1))+min
        }

        numeros[i]=novo
    }

    numeros.sort((a,b)=> a-b)
    return <Text style={Padrao.ex}>{numeros.join(',')}</Text>
}