import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import React from 'react';
import { styles } from './styles';
import {
  ChatsListItemComponent,
  CommonHeaderComponent,
  CommonSearchComponent,
  HeadingComponent,
} from '../../../components';
import { COLORS } from '../../../resources';
import { genericStyles } from '../../../utilities/genericStyles';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import { lock } from '../../../assets';

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
      <FlatList
        data={['', ' ', '', '']}
        renderItem={({ item }) => <ChatsListItemComponent />}
        ItemSeparatorComponent={() => (
          <View
            style={{
              backgroundColor: COLORS.LIGHT_BACKGROUND_GREY,
              height: 1,
              marginStart: responsiveWidth(50 + 18),
            }}></View>
        )}
        ListFooterComponent={() => {
          return (
            <View
              style={[
                genericStyles.rowContainer,
                { alignSelf: 'center', marginTop: responsiveHeight(12) },
              ]}>
              <Text>
                <Icon
                  name="lock"
                  size={12}
                  color={COLORS.GREY}
                  style={genericStyles.ml8}
                />{' '}
                Your personal messages are
              </Text>
              <Text style={genericStyles.blueText}> end to end encrypted</Text>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
};

export { ChatsScreen };
