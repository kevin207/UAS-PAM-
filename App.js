import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './pages/Home';
import Detail from './pages/Detail';


export default function App() {

  const Stack = createNativeStackNavigator();
  

  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}>

      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

