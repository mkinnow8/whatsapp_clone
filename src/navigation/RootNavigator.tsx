import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { ROUTE } from '../resources';
import { ChatsScreen, PhoneNumberScreen, WelcomeAuthScreen } from '../screens';

type Props = {};

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = (props: Props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={ROUTE.ALL_CHATS} component={ChatsScreen} />
    </Tab.Navigator>
  );
};

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={ROUTE.WELCOME_AUTH} component={WelcomeAuthScreen} />
      <AuthStack.Screen name={ROUTE.PHONE_NUMBER} component={PhoneNumberScreen} />
    </AuthStack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
