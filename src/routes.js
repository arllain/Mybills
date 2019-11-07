import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './pages/Login';
import Home from './pages/Home';

const AppNavigator = createStackNavigator({
   Login: {
      screen: Login,
      navigationOptions: {
         header: null
      }
   },
   Home: {
      screen: Home,
      navigationOptions: {
         header: null
      }
   }
});

export default Routes = createAppContainer(AppNavigator);
