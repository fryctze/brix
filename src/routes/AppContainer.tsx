import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ChooseUserSignScreen } from '../screens/auth/ChooseUserSignScreen';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { IntroScreen } from '../screens/intro/IntroScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="ChooseUserSign" component={ChooseUserSignScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default AppContainer;
