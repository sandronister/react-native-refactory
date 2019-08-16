import React from 'react'
import {View, Text} from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

// function parImpar(num){

//     const result = (num%2==0)?'Par':'Impar'
//     return <Text style={Padrao.ex}>{result}</Text>
// }

//{/* {
            // props.numero %2==0?
            // <Text style={Padrao.ex}>Par</Text>:
            // <Text style={Padrao.ex}>Impar</Text>
            
            //parImpar(props.numero)
        /*}  //}*/

export default props =>
    <View>
        <If test={props.numero %2 ==0}>
            <Text style={Padrao.ex}>Par</Text>   
        </If>

        <If test={props.numero %2 == 1}>
            <Text style={Padrao.ex}>Impar</Text>   
        </If>
    </View>