import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {CommonHeaderComponent} from '../../../components';

type Props = {};

const ChatsScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeaderComponent
        leftButton1="Edit"
        rightIcon1="camera-outline"
        rightIcon2="square-edit-outline"
      />
    </SafeAreaView>
  );
};

export {ChatsScreen};
