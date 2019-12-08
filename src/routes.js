import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginScreen from './pages/Login';
import MainScreen from './pages/Main';

const MainNavigator = createSwitchNavigator({
    Home: { screen: LoginScreen },
    Main: { screen: MainScreen }
});

const Routes = createAppContainer(MainNavigator);

export default Routes;
