import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import SearchBar from './src/screens/components/SearchBar';
import ResultsList from './src/screens/components/ResultsList';

const navigator = createStackNavigator(
  {
    // Home: HomeScreen,
    Search: SearchScreen,
    Bar: SearchBar,
    List: ResultsList
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: "Anzios Italian"
    }
  }
);

export default createAppContainer(navigator);
