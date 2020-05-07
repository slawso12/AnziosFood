import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './src/screens/components/SearchBar';


const navigator = createStackNavigator(
  {
    // Home: HomeScreen,
    Search: SearchScreen,
    Bar: SearchBar
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: "Anzios"
    }
  }
);

export default createAppContainer(navigator);
