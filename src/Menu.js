import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

import Simples from './components/Simples';
import ParImpar from './components/ParImpar';
import { Inverter, Megasega } from './components/Multi';

export default createDrawerNavigator({
	Megasega: {
		screen: () => <Megasega numeros={8} />,
		navigationOptions: { title: 'Mega Sena' }
    }, 
    Inverter:{
        screen:()=> <Inverter texto='React Nativo!' />
    }, 
    ParImpar:{
        screen:()=> <ParImpar numero={30}/>,
        navigationOptions:{title: 'Par & Ìmpar'}
    }, 
    Simples:{
        screen: () => <Simples texto='Flexível!!!' />
    }
},{drawerWidth:300});
