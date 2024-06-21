import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext, useState} from 'react';
import {COLORS, ROUTE} from '../resources';
import {CameraPage, ChatsScreen, MediaPage} from '../screens';
import {MyContext} from '../context/globalContext';

type Props = {};

const Stack = createNativeStackNavigator();
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
        component={ChatsScreen}
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
      <Stack.Screen name={ROUTE.ALL_CHATS} component={ChatsScreen} />
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

export default RootNavigator;

const styles = StyleSheet.create({});
