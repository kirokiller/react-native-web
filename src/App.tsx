import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './routes';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {routes.map(route => (
          <Stack.Screen
            name={route.name}
            component={route.screen}
            key={route.name}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
