import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RootStackParamList } from './navigation-types';
import { ChooseUserSignScreen } from '../screens/auth/ChooseUserSignScreen';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { IntroScreen } from '../screens/intro/IntroScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="ChooseUser" component={ChooseUserSignScreen} />
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
