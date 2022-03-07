
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from "react-redux";
import store from './redux/store';

//Screens
import SignIn from './screens/SignIn';
import Albums from './screens/Albums';
import Posts from './screens/Posts';
import Galery from './screens/Galery';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                  headerShown: false,
                }}
                 initialRouteName="SignIn"
                 >
      
          <Stack.Screen name="SignIn" component={SignIn} />
      
          <Stack.Screen name="Albums" component={Albums} />
      
          <Stack.Screen name="Galery" component={Galery} />
      
          <Stack.Screen name="Posts" component={Posts} />
      
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


