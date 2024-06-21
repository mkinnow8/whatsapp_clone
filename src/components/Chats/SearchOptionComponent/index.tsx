import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {genericStyles} from '../../../utilities/genericStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../resources';

type Props = {
  icon: string;
  text: string;
};

const SearchOptionComponent = ({icon, text}: Props) => {
  return (
    <>
      <View
        style={[
          genericStyles.rowContainer,
          genericStyles.mh12,
          genericStyles.pv8,
        ]}>
        <Icon name={icon} size={32} color={COLORS.BLUE} />
        <Text style={[genericStyles.textLarge, genericStyles.ml12, {flex: 1}]}>
          {text}
        </Text>
        <Icon
          name={'arrow-top-left-thin-circle-outline'}
          size={24}
          color={COLORS.GREY}
        />
      </View>
      <View
        style={[
          genericStyles.ml12,
          {height: 1, backgroundColor: COLORS.SILVER},
        ]}
      />
    </>
  );
};

export {SearchOptionComponent};

const styles = StyleSheet.create({});
