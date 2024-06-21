import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {user} from '../../../assets';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../resources';
import {genericStyles} from '../../../utilities/genericStyles';
import {styles} from './styles';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import {GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  isCallsItem?: boolean;
  unreadMessages?: number;
  disableTouch?: boolean;
  disableSlide?: boolean;
};

const ChatsListItemComponent = ({
  isCallsItem,
  unreadMessages,
  disableTouch,
  disableSlide,
}: Props) => {
  const navigation = useNavigation();
  const TRANSLATE_THRESHOLD = responsiveWidth(128);
  const translateX = useSharedValue(0);

  const pan = Gesture.Pan()
    .activeOffsetX([-5, 5]) // This value is set so that flatlist scrolling works properly
    .onChange(event => {
      // when slide is in progress, updates translation value and don't go beyond the buttons
      if (
        TRANSLATE_THRESHOLD >= event.translationX &&
        event.translationX >= -TRANSLATE_THRESHOLD
      )
        translateX.value = event.translationX;
      console.log(translateX.value);
    })
    .onEnd(event => {
      // when slide ended before reaching half of either side resets translation
      if (
        -TRANSLATE_THRESHOLD / 2 <= translateX.value &&
        TRANSLATE_THRESHOLD / 2 >= translateX.value
      ) {
        translateX.value = withTiming(0);
      }
      // when slide crosses halfway in right side
      else if (TRANSLATE_THRESHOLD / 2 >= translateX.value) {
        translateX.value = withTiming(-TRANSLATE_THRESHOLD);
      }
      // when slide crosses halfway in left side
      else {
        translateX.value = withTiming(TRANSLATE_THRESHOLD);
      }
    });

  const translateAnimation = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <>
      <GestureDetector gesture={!disableSlide ? pan : Gesture.Simultaneous()}>
        <Animated.View
          style={[styles.itemContainer, {flex: 1}, translateAnimation]}>
          {!disableSlide && (
            <>
              <TouchableOpacity
                style={[
                  {backgroundColor: COLORS.BLUE, left: responsiveWidth(-128)},
                  styles.slideButton,
                ]}>
                <Icon name="message-badge" size={20} color={COLORS.WHITE} />
                <Text style={(genericStyles.textMed, {color: COLORS.WHITE})}>
                  Unread
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: COLORS.LIGHT_GREY,
                    left: responsiveWidth(-65),
                  },
                  styles.slideButton,
                ]}>
                <Icon
                  name="pin-outline"
                  size={20}
                  color={COLORS.WHITE}
                  // style={{marginStart: responsiveWidth(12)}}
                />
                <Text style={(genericStyles.textMed, {color: COLORS.WHITE})}>
                  Pin
                </Text>
              </TouchableOpacity>
            </>
          )}

          <Image source={user} style={styles.image} />
          <TouchableOpacity
            style={styles.centerContainer}
            disabled={disableTouch}>
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
          {!disableSlide && (
            <>
              <TouchableOpacity
                style={[
                  {
                    backgroundColor: COLORS.LIGHT_GREY,
                    right: responsiveWidth(-65),
                  },
                  styles.slideButton,
                ]}>
                <Icon
                  name="dots-horizontal"
                  size={20}
                  color={COLORS.WHITE}
                  // style={{marginStart: responsiveWidth(12)}}
                />
                <Text style={(genericStyles.textMed, {color: COLORS.WHITE})}>
                  More
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {backgroundColor: COLORS.BLUE, right: responsiveWidth(-128)},
                  styles.slideButton,
                ]}>
                <Icon
                  name="archive"
                  size={20}
                  color={COLORS.WHITE}
                  // style={{marginStart: responsiveWidth(12)}}
                />
                <Text style={(genericStyles.textMed, {color: COLORS.WHITE})}>
                  Archive
                </Text>
              </TouchableOpacity>
            </>
          )}
        </Animated.View>
      </GestureDetector>
    </>
  );
};

export {ChatsListItemComponent};
