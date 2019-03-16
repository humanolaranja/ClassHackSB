import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from '../screens/Main';
import News from '../screens/News';

const RootStack = createStackNavigator({
  Main: {
    screen: Main
  },
  News: {
    screen: News
  }
}, {
  initialRouteName: 'Main',
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
});

export default class MainStackNavigation extends React.Component {
  render() {
    const MainStackNavigationConstructor = createAppContainer(RootStack);
    return(
      <MainStackNavigationConstructor />
    )
  }
}
