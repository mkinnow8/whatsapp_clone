
import React, { useState } from 'react';

import { ChatsScreen, PhoneNumberScreen, WelcomeAuthScreen } from '../screens';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { COLORS, ROUTE } from '../resources';


type Props = {};

const AuthStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = (props: Props) => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <NavigationContainer>
      {loggedIn ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.BLUE,
        tabBarInactiveTintColor: COLORS.GREY,
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        name={ROUTE.STATUS}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'circle-slice-8' : 'circle-double'}
              size={30}
              color={focused ? COLORS.BLUE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.CALLS}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'phone' : 'phone-outline'}
              size={28}
              color={focused ? COLORS.BLUE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.COMMUNITIES}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'account-group' : 'account-group-outline'}
              size={30}
              color={focused ? COLORS.BLUE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.ALL_CHATS}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'chat' : 'chat-outline'}
              size={30}
              color={focused ? COLORS.BLUE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.SETTINGS}
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name={focused ? 'cog' : 'cog-outline'}
              size={30}
              color={focused ? COLORS.BLUE : COLORS.GREY}
            />
          ),
        }}
      />
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
