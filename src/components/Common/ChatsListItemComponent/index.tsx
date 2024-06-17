import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {user} from '../../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../resources';
import {genericStyles} from '../../../utilities/genericStyles';
import {styles} from './styles';
import {responsiveWidth} from '../../../utilities/responsiveFunctions';

type Props = {
  isCallsItem?: boolean;
  unreadMessages?: number;
};

const ChatsListItemComponent = ({isCallsItem, unreadMessages}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.itemContainer}>
      <Image source={user} style={styles.image} />
      <TouchableOpacity style={styles.centerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={genericStyles.textLarge}>{'Andrew Parker'}</Text>
          {!isCallsItem && (
            <View>
              <Text style={{color: COLORS.GREY}}>{'12:32 PM'}</Text>
            </View>
          )}
        </View>
        <View
          style={[
            genericStyles.rowContainer,
            {justifyContent: 'space-between'},
          ]}>
          <Text numberOfLines={1} style={{color: COLORS.GREY}}>
            {'most recent message.'}
          </Text>
          {unreadMessages && (
            <View style={styles.unreadContainer}>
              <Text style={[genericStyles.textSmall, styles.unreadText]}>
                {'20'}
              </Text>
            </View>
          )}
        </View>
      </TouchableOpacity>
      {isCallsItem && (
        <View style={genericStyles.rowContainer}>
          <Text style={{color: COLORS.GREY}}>{'12:32 PM'}</Text>
          <TouchableOpacity>
            <Icon
              name="information-outline"
              size={20}
              color={COLORS.BLUE}
              style={{marginStart: responsiveWidth(12)}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export {ChatsListItemComponent};
