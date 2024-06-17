import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useState} from 'react';
import {COLORS} from '../../../resources';
import {styles} from './styles';

type Props = {};

const CommonSearchComponent = (props: Props) => {
  const [searchText, setSearchText] = useState<string>();
  return (
    <View style={styles.searchContainer}>
      <Icon name="magnify" size={20} color={COLORS.GREY} />
      <TextInput
        placeholder="Search"
        style={styles.searchText}
        onChangeText={setSearchText}
        value={searchText}
      />
    </View>
  );
};

export {CommonSearchComponent};
