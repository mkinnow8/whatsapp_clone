import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import {genericStyles} from '../../../utilities/genericStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CommonSearchComponent} from '../CommonSearchComponent';

type Props = {
  heading: string;
  onClose: () => void;
  children: React.ReactNode;
};

const CommonModalComponent = ({children, heading, onClose}: Props) => {
  const [searchText, setSearchText] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={[genericStyles.rowContainer]}>
          <Text style={[genericStyles.textMed, styles.headingText]}>
            {'Heading Text'}
          </Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" size={24} />
          </TouchableOpacity>
        </View>
        <View style={[genericStyles.rowContainer, genericStyles.mv12]}>
          <CommonSearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
            isSearchFocused={isSearchFocused}
            setIsSearchFocused={setIsSearchFocused}
          />
        </View>

        {children}
      </View>
    </View>
  );
};

export {CommonModalComponent};
