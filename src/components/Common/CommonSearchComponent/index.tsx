import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useRef, useState} from 'react';
import {COLORS} from '../../../resources';
import {styles} from './styles';
import {searchIcon} from '../../../assets';
import {genericStyles} from '../../../utilities/genericStyles';

type Props = {
  searchText: string;
  isSearchFocused: boolean;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
  setIsSearchFocused: React.Dispatch<React.SetStateAction<boolean>>;
  // setSearchText: (searchText: string) => void,
};

const CommonSearchComponent = ({
  searchText,
  isSearchFocused,
  setSearchText,
  setIsSearchFocused,
}: Props) => {
  const searchRef = useRef<TextInput>(null);
  const handleFocus = () => {
    setIsSearchFocused(true);
  };
  const searchCancel = () => {
    setIsSearchFocused(false);
    searchRef.current?.clear();
    searchRef.current?.blur();
    setSearchText('');
  };

  return (
    <View style={[genericStyles.rowContainer, {flex: 1}]}>
      <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.iconStyle} />
        <TextInput
          ref={searchRef}
          placeholder="Search"
          style={styles.searchText}
          onChangeText={setSearchText}
          onFocus={handleFocus}
          value={searchText}
        />
      </View>
      {isSearchFocused && (
        <TouchableOpacity onPress={searchCancel}>
          <Text
            style={[
              genericStyles.textMed,
              genericStyles.blueText,
              genericStyles.ml8,
            ]}>
            Cancel
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export {CommonSearchComponent};
