import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
        <Simples texto="Flexivel!!!"/>
        <ParImpar numero="34"/>
        <Inverter texto='React Native'/>
        <Megasega numeros={6}/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
