import React from 'react'
import {View, ScrollView,FlatList, Text} from 'react-native'
 

const alunos = [
    {id:1,nome:'João',nota:7.8},
    {id:2,nome:'Ana',nota:8.2},
    {id:3,nome:'Beatriz',nota:9},
    {id:4,nome:'Gabriel',nota:8.3},
    {id:5,nome:'Giovanni',nota:9.8},
    {id:6,nome:'Miguel',nota:10},    
    {id:7,nome:'Antonio',nota:7.9},
    {id:8,nome:'Aline',nota:8.6},
    {id:9,nome:'Luiz',nota:5.8},
    {id:11,nome:'João',nota:7.8},
    {id:12,nome:'Ana',nota:8.2},
    {id:13,nome:'Beatriz',nota:9},
    {id:14,nome:'Gabriel',nota:8.3},
    {id:15,nome:'Giovanni',nota:9.8},
    {id:16,nome:'Miguel',nota:10},    
    {id:17,nome:'Antonio',nota:7.9},
    {id:18,nome:'Aline',nota:8.6},
    {id:19,nome:'Luiz',nota:5.8},
]

const itemEstilo ={
    paddingHorizontal:15, 
    height:50, 
    backgroundColor:'#DDD', 
    borderWidth:0.5, 
    borderColor:'#222',

    //FLEX
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between'
}


export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight:'bold'}} > Nota {props.nota}</Text>
    </View>

export default props =>{

    const renderItem = ({item}) =>{
        return <Aluno {...item}/>
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
                keyExtractor={(_,index)=> index.toString() }/>
        </ScrollView>
    )
}