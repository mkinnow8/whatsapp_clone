import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import React from 'react';
import {genericStyles} from '../../../utilities/genericStyles';
import {responsiveWidth} from '../../../utilities/responsiveFunctions';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {COLORS} from '../../../resources';

type Props = {
  children?: React.ReactNode;
  leftIcon1?: string;
  leftButton1?: string;
  rightButton1?: string;
  rightIcon1?: string;
  rightIcon2?: string;
  leftIcon1Press?: () => void;
  leftButton1Press?: () => void;
  rightButton1Press?: () => void;
  rightIcon1Press?: () => void;
  rightIcon2Press?: () => void;
};

const CommonHeaderComponent = ({
  children,
  leftIcon1,
  leftButton1,
  rightButton1,
  rightIcon1,
  rightIcon2,
  leftIcon1Press,
  leftButton1Press,
  rightButton1Press,
  rightIcon1Press,
  rightIcon2Press,
}: Props) => {
  return (
    <View
      style={[
        genericStyles.rowContainer,
        {
          justifyContent: 'space-between',
          padding: responsiveWidth(12),
        },
      ]}>
      {/* Left Buttons */}
      <View style={genericStyles.rowContainer}>
        {leftIcon1 && (
          <TouchableOpacity onPress={leftIcon1Press}>
            <Icon name={leftIcon1} size={26} color={COLORS.BLUE} />
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={leftButton1Press}>
          <Text style={[genericStyles.textMed, genericStyles.blueText]}>
            {leftButton1}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Center Component */}
      {children}

      {/* Right Buttons */}
      <View style={genericStyles.rowContainer}>
        <TouchableOpacity onPress={rightButton1Press}>
          <Text style={[genericStyles.textMed, genericStyles.blueText]}>
            {rightButton1}
          </Text>
        </TouchableOpacity>
        {rightIcon1 && (
          <TouchableOpacity onPress={rightIcon1Press}>
            <Icon name={rightIcon1} size={26} color={COLORS.BLUE} />
          </TouchableOpacity>
        )}
        {rightIcon2 && (
          <TouchableOpacity
            onPress={rightIcon2Press}
            style={genericStyles.ml12}>
            <Icon name={rightIcon2} size={24} color={COLORS.BLUE} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export {CommonHeaderComponent};
