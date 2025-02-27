import {
  ChatsScreen,
  CountryScreen,
  EditProfileScreen,
  OtpScreen,
  PhoneNumberScreen,
  StatusScreen,
  WelcomeAuthScreen,
} from '../screens';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext, useState} from 'react';
import {COLORS, ROUTE} from '../resources';
import {CameraPage, MediaPage} from '../screens';
import {MyContext} from '../context/globalContext';
import {useAppSelector} from '../redux/hooks';

type Props = {};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RootNavigator = (props: Props) => {
  const isLoggedIn = useAppSelector(state => state.userInfo.isLoggedIn);
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

const TabNavigator = () => {
  const {isTabHidden, setIsTabHidden} = useContext(MyContext);
  console.log(isTabHidden, 'isTabHidden');
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.BLUE,
        tabBarInactiveTintColor: COLORS.GREY,
        headerShown: false,
        tabBarHideOnKeyboard: true,

        tabBarStyle: {
          display: isTabHidden ? 'none' : 'flex',
        },
      }}>
      <Tab.Screen
        name={ROUTE.STATUS}
        component={StatusStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
            <Icon
              name={focused ? 'account-group' : 'account-group-outline'}
              size={30}
              color={focused ? COLORS.BLUE : COLORS.GREY}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTE.CHATS}
        component={ChatStackNavigator}
        options={{
          tabBarIcon: ({focused}) => (
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
          tabBarIcon: ({focused}) => (
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
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.WELCOME_AUTH} component={WelcomeAuthScreen} />
      <Stack.Screen name={ROUTE.PHONE_NUMBER} component={PhoneNumberScreen} />
      <Stack.Screen name={ROUTE.OTP} component={OtpScreen} />
      <Stack.Screen name={ROUTE.COUNTRY} component={CountryScreen} />
      <Stack.Screen name={ROUTE.EDIT_PROFILE} component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

const ChatStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.ALL_CHATS} component={ChatsScreen} />
      <Stack.Screen name={ROUTE.CAMERA} component={CameraPage} />
      <Stack.Screen name={ROUTE.MEDIA_PAGE} component={MediaPage} />
    </Stack.Navigator>
  );
};

const StatusStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={ROUTE.STATUS_SCREEN} component={StatusScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
