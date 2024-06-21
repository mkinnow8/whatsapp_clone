import {View, Text} from 'react-native';
import React from 'react';
import {genericStyles} from '../../../utilities/genericStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS} from '../../../resources';

type Props = {};

const EditMenuBottomComponent = (props: Props) => {
  return (
    <View
      style={[
        genericStyles.rowContainer,
        genericStyles.ph12,
        {
          height: 56,
          justifyContent: 'space-between',
          // elevation: 1,
          borderTopWidth: 1,
          borderTopColor: COLORS.SILVER,
        },
      ]}>
      <TouchableOpacity>
        <Text style={[genericStyles.textMed, genericStyles.blueText]}>
          Archive
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[genericStyles.textMed, genericStyles.blueText]}>
          Read
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[genericStyles.textMed, genericStyles.blueText]}>
          Delete
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export {EditMenuBottomComponent};
