import React from 'react';
import { View, Text } from 'react-native';

const font = { style: { fontSize: 30 } };

export const Filho = props => 
	<View>
		<Text {...font}>
			Filho: {props.nome} {props.sobrenome}
		</Text>
	</View>

export const Pai = props =>
    <View>
        <Text {...font}>Pai: {props.nome} {props.sobrenome}</Text>
        {React.Children.map(props.children,
            c=>React.cloneElement(c,{...props, ...c.props}))}
    </View>

export const Avo = props =>
    <View>
        <Text {...font}>Avo:{props.nome} {props.sobrenome}</Text>
        <Pai nome="André" sobrenome={props.sobrenome}>
            <Filho nome="Luca"/>
            <Filho nome="Joaquim"/>
            <Filho nome="José"/>
        </Pai>
    </View>
