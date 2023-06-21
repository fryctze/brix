import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon, IconElement } from '@ui-kitten/components';
import React from 'react';

import { RootStackParamList } from './navigation-types';
import { ChooseUserSignScreen } from '../screens/auth/ChooseUserSignScreen';
import { Login } from '../screens/auth/Login';
import { Register } from '../screens/auth/Register';
import { IntroScreen } from '../screens/intro/IntroScreen';
import { BarBottom } from '../screens/main/BarBottom';
import { ChatScreen } from '../screens/main/chat/ChatScreen';
import { ClassScreen } from '../screens/main/class/ClassScreen';
import { HomeScreen } from '../screens/main/home/HomeScreen';
import { ProfileScreen } from '../screens/main/profile/ProfileScreen';
import { QuizScreen } from '../screens/main/quiz/QuizScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const BottomTab = createBottomTabNavigator();

const HomeIcon = (props): IconElement => <Icon {...props} name={'home'} />;
const ClassIcon = (props): IconElement => (
  <Icon {...props} name={'class_icon'} />
);
const ChatIcon = (props): IconElement => <Icon {...props} name={'chat'} />;
const QuizIcon = (props): IconElement => <Icon {...props} name={'quiz'} />;
const ProfileIcon = (props): IconElement => (
  <Icon {...props} name={'profile'} />
);

const MainNavigation = () => {
  return (
    <BottomTab.Navigator
      tabBar={props => <BarBottom {...props} />}
      screenOptions={{ headerShown: false }}>
      <BottomTab.Screen
        name={'Home'}
        component={HomeScreen}
        options={{ title: 'Home', tabBarIcon: HomeIcon }}
      />
      <BottomTab.Screen
        name={'Class'}
        component={ClassScreen}
        options={{ title: 'Class', tabBarIcon: ClassIcon }}
      />
      <BottomTab.Screen
        name={'Chat'}
        component={ChatScreen}
        options={{ title: 'Chat', tabBarIcon: ChatIcon }}
      />
      <BottomTab.Screen
        name={'Quiz'}
        component={QuizScreen}
        options={{ title: 'Quiz', tabBarIcon: QuizIcon }}
      />
      <BottomTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{ title: 'Profile', tabBarIcon: ProfileIcon }}
      />
    </BottomTab.Navigator>
  );
};

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Intro"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="ChooseUser" component={ChooseUserSignScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthNavigation} />
      <Stack.Screen name="Main" component={MainNavigation} />
    </Stack.Navigator>
  );
};

const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};

export default AppContainer;
