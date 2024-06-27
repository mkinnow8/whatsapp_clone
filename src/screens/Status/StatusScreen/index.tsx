import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {
  CommonHeaderComponent,
  CommonSearchComponent,
  HeadingComponent,
} from '../../../components';
import {genericStyles} from '../../../utilities/genericStyles';

type Props = {};

const StatusScreen = (props: Props) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeaderComponent leftButton1={'Privacy'} />
      <HeadingComponent text={'Status'} />
      <View
        style={[genericStyles.rowContainer, genericStyles.mv12, styles.search]}>
        <CommonSearchComponent
          searchText={searchText}
          setSearchText={setSearchText}
          isSearchFocused={isSearchFocused}
          setIsSearchFocused={setIsSearchFocused}
        />
      </View>
    </SafeAreaView>
  );
};

export {StatusScreen};
