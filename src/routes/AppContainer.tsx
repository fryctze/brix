import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Layout } from '@ui-kitten/components';
import { View } from 'react-native';

import { IntroScreen } from '../screens/IntroScreen';
import { ChooseUserSignScreen } from '../screens/auth/ChooseUserSignScreen';
import IntroSlideScreen from '../screens/intro/IntroSlideScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="IntroSlide"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="IntroSlide" component={IntroSlideScreen} />
      <Stack.Screen name="ChooseUserSign" component={ChooseUserSignScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
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
