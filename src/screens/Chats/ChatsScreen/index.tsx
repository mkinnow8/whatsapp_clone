import {
  Animated,
  Image,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {styles} from './styles';
import {
  ChatsListItemComponent,
  CommonHeaderComponent,
  CommonSearchComponent,
  EditMenuBottomComponent,
  HeadingComponent,
  NewChatModal,
  SearchOptionComponent,
} from '../../../components';
import {COLORS, ROUTE} from '../../../resources';
import {genericStyles} from '../../../utilities/genericStyles';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utilities/responsiveFunctions';
import {SearchResultItems} from '../../../utilities/dataObjects';
import {MyContext} from '../../../context/globalContext';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';

type Props = {};

const ChatsScreen = (props: Props) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [newChatModal, setNewChatModal] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedEdit, setSelectedEdit] = useState<number[]>([]);
  const searchPosition = useRef(new Animated.Value(0)).current; // 0 for initial, 1 for focused

  const {isTabHidden, setIsTabHidden} = useContext(MyContext);

  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  useEffect(() => {
    if (!hasPermission) {
      console.log('Permission Requested');
      requestPermission();
    }
    if (device == null) {
      console.log('No Camera Device.');
    }
  }, []);

  const onEdit = () => {
    if (editMode) {
      setSelectedEdit([]);
    }
    setEditMode(!editMode);
    setIsTabHidden(!isTabHidden);
  };
  const onEditSelect = (index: number) => {
    setSelectedEdit(prev => {
      if (prev.includes(index)) {
        return prev.filter(item => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  useEffect(() => {
    if (isSearchFocused) {
      Animated.timing(searchPosition, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      console.log('Clicked');
    } else {
      Animated.timing(searchPosition, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isSearchFocused]);

  const translateY = searchPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -90],
  });

  const openNewChatModal = () => {
    setNewChatModal(true);
  };
  const onModalClose = () => {
    setNewChatModal(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{transform: [{translateY: translateY}], flex: 1}}>
        <CommonHeaderComponent
          leftButton1={editMode ? 'Done' : 'Edit'}
          leftButton1Press={onEdit}
          rightIcon1="camera-outline"
          rightIcon2="square-edit-outline"
          rightIcon2Press={openNewChatModal}
          rightIcon1Press={() => navigation.navigate(ROUTE.CAMERA as never)}
          // rightIcon1Press={() => getPhotos()}
        />
        <HeadingComponent
          text={
            selectedEdit.length ? selectedEdit.length + ' Selected ' : 'Chats'
          }
        />
        <View style={[genericStyles.rowContainer, styles.search, ,]}>
          <CommonSearchComponent
            searchText={searchText}
            setSearchText={setSearchText}
            isSearchFocused={isSearchFocused}
            setIsSearchFocused={setIsSearchFocused}
          />
          {!isSearchFocused && (
            <TouchableOpacity>
              <Icon
                name="filter-variant"
                size={20}
                color={COLORS.GREY}
                style={genericStyles.ml8}
              />
            </TouchableOpacity>
          )}
        </View>
        {isSearchFocused ? (
          <>
            <FlatList
              style={genericStyles.mt8}
              data={SearchResultItems}
              renderItem={({item}) => (
                <SearchOptionComponent text={item.text} icon={item.icon} />
              )}
            />
          </>
        ) : (
          <>
            <CommonHeaderComponent
              leftButton1="Broadcast Lists"
              rightButton1="New Group"
            />

            <FlatList
              data={['', '', '', '', '', '', '', '', '', '']}
              style={{flex: 1}}
              nestedScrollEnabled={true}
              showsVerticalScrollIndicator={false}
              renderItem={({item, index}) => (
                <View
                  style={[
                    genericStyles.rowContainer,

                    editMode && genericStyles.pl12,
                    {
                      backgroundColor: selectedEdit.includes(index)
                        ? COLORS.LIGHT_BACKGROUND_GREY
                        : COLORS.WHITE,
                    },
                  ]}>
                  {editMode ? (
                    <TouchableOpacity
                      onPress={() => onEditSelect(index)}
                      style={[genericStyles.rowContainer, {flex: 1}]}>
                      <Icon
                        name={
                          selectedEdit.includes(index)
                            ? 'check-circle'
                            : 'circle-outline'
                        }
                        size={24}
                        color={
                          selectedEdit.includes(index)
                            ? COLORS.BLUE
                            : COLORS.LIGHT_GREY
                        }
                      />
                      <ChatsListItemComponent
                        disableTouch={true}
                        disableSlide={true}
                      />
                    </TouchableOpacity>
                  ) : (
                    <ChatsListItemComponent />
                  )}
                </View>
              )}
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
                      genericStyles.mv12,
                      {alignSelf: 'center'},
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
                    <Text style={genericStyles.blueText}>
                      {' '}
                      end to end encrypted
                    </Text>
                  </View>
                );
              }}
            />
          </>
        )}
      </Animated.View>
      {editMode && <EditMenuBottomComponent />}
      {/* {device && (
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
      )} */}

      <Modal
        animationType="slide"
        transparent={true}
        visible={newChatModal}
        onRequestClose={() => {
          setNewChatModal(false);
        }}>
        <NewChatModal onClose={onModalClose} />
      </Modal>
    </SafeAreaView>
  );
};

export {ChatsScreen};
