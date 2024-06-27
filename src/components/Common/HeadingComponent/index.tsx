import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../../resources';
import { respFontSize } from '../../../utilities/responsiveFunctions';
import { genericStyles } from '../../../utilities/genericStyles';

type Props = {
  text: string;
};

const HeadingComponent = ({ text }: Props) => {
  return (
    <View style={[genericStyles.ml12]}>
      <Text style={styles.heading}>{text}</Text>
    </View>
  );
};

export { HeadingComponent };

const styles = StyleSheet.create({
  heading: {
    fontSize: respFontSize(20),
    fontFamily: 'Playwrite-Polska',
    fontWeight: 'bold',
    color: COLORS.BLACK,
  },
});
