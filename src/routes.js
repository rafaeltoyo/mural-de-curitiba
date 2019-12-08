import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './pages/Login';
import MainScreen from './pages/Main';
import DetailsScreen from './pages/Details';

import TopBar from './components/TopBar';

const MainNavigator = createStackNavigator({
    Main: {
        screen: MainScreen,
        navigationOptions: {
            headerTitle: () => <TopBar />,
        },
    },
    Details: {
        screen: DetailsScreen,
        navigationOptions: {
            headerTitle: () => <TopBar />,
        },
    },
},
{
    initialRouteName: 'Main', // <-- Alterar aqui quando for testar uma tela
    headerMode: 'float',
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {/*
        headerStyle: {
            backgroundColor: 'rgba(0,0,0,.5)',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },*/
    },
    navigationOptions: {},
});

AuthNavigator = createSwitchNavigator({
    SignIn: LoginScreen,
    Home: MainNavigator
});

// Rota padrão para App final
//const Routes = createAppContainer(AuthNavigator);
// Debugar App sem login. 
const Routes = createAppContainer(MainNavigator);

export default Routes;
