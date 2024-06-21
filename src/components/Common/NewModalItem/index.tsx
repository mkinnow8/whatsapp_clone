import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {user} from '../../../assets';
import {genericStyles} from '../../../utilities/genericStyles';
import {COLORS} from '../../../resources';

type Props = {};

const NewModalItem = (props: Props) => {
  return (
    <View style={[styles.itemContainer]}>
      <Image source={user} style={styles.image} />
      <TouchableOpacity style={styles.centerContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={genericStyles.textLarge}>{'Andrew Parker'}</Text>
        </View>
        <View
          style={[
            genericStyles.rowContainer,
            {justifyContent: 'space-between'},
          ]}>
          <Text numberOfLines={1} style={{color: COLORS.GREY}}>
            {'most recent message.'}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[genericStyles.textMed, genericStyles.blueText]}>
          Invite
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {NewModalItem};
