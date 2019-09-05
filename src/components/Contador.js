import React , {Component} from 'react'
import {View,Text,TouchableHighlight} from 'react-native'


export default class Contador extends Component{

    state = {
        numero:this.props.inicial
    }

    incrementa=()=>{
        this.setState({numero:this.state.numero+1})
    }

    zerar = () =>{
        this.setState({numero:this.props.inicial})
    }

    render(){
        return(
            <View>
                <Text style={{fontSize:40}}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.incrementa}
                    onLongPress={this.zerar}
                >
                    <Text>Incrementar / Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}