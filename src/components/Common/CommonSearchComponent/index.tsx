import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, { useState } from 'react';
import { COLORS } from '../../../resources';
import { styles } from './styles';
import { searchIcon } from '../../../assets';

type Props = {
  searchText: string;
  setSearchText: (searchText: string) => void,
};

const CommonSearchComponent = ({ searchText, setSearchText }: Props) => {

  return (
    <View style={styles.searchContainer}>
      <Image source={searchIcon} style={styles.iconStyle} />
      <TextInput
        placeholder="Search"
        style={styles.searchText}
        onChangeText={setSearchText}
        value={searchText}
      />
    </View>
  );
};

export { CommonSearchComponent };
