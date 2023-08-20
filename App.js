import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home1 from './Home1';
import OtherPage from './OtherPage';
import OtherPage1 from './OtherPage1';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home1">
        <Stack.Screen name=" " component={Home1} />
        <Stack.Screen name="OtherPage" component={OtherPage} />
        <Stack.Screen name="OtherPage1" component={OtherPage1} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
