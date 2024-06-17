import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import {styles} from './styles';
import {
  ChatsListItemComponent,
  CommonHeaderComponent,
  CommonSearchComponent,
  HeadingComponent,
} from '../../../components';
import {COLORS} from '../../../resources';
import {genericStyles} from '../../../utilities/genericStyles';
import {responsiveWidth} from '../../../utilities/responsiveFunctions';

type Props = {};

const ChatsScreen = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeaderComponent
        leftButton1="Edit"
        rightIcon1="camera-outline"
        rightIcon2="square-edit-outline"
      />
      <HeadingComponent text="Chats" />
      <View style={[genericStyles.rowContainer, styles.search]}>
        <CommonSearchComponent />
        <TouchableOpacity>
          <Icon
            name="filter-variant"
            size={20}
            color={COLORS.GREY}
            style={genericStyles.ml8}
          />
        </TouchableOpacity>
      </View>
      <CommonHeaderComponent
        leftButton1="Broadcast Lists"
        rightButton1="New Group"
      />
      <ChatsListItemComponent />
    </SafeAreaView>
  );
};

export {ChatsScreen};
