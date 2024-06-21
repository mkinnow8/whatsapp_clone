import { View, Text, TextInput, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { responsiveWidth } from "../../../utilities/responsiveFunctions";
import { CommonHeaderComponent, PhoneNumberModal } from "../../../components";
import { COLORS, ROUTE } from "../../../resources";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setPhoneNumber } from "../../../redux/slices/UserInfoSlice";
type Props = {};

export const PhoneNumberScreen = (props: Props) => {
    const [number, setNumber] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);
    const navigation = useNavigation();
    const handleChange = (number: string) => {
        let cleanText = number.replace(/[^0-9]/g, '');
        if (cleanText.length > 10) {
            cleanText = cleanText.slice(0, 10);
        }
        if (cleanText.length > 5) {
            cleanText = cleanText.slice(0, 5) + ' ' + cleanText.slice(5);
        }
        setNumber(cleanText);
    };
    const dispatch = useAppDispatch();
    const rightBtn1Press = () => {
        dispatch(setPhoneNumber({ phoneNumber: number }));
        if (number.length > 10) {
            setVisible(true);
        }
        // navigation.navigate(ROUTE.EDIT_PROFILE as never);
    }
    const userInfo = useAppSelector(state => state.userInfo.userInfo)
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeaderComponent rightButton1="Done" rightButton1Press={rightBtn1Press}>
                <Text style={styles.headerTxt}>Phone Number</Text>
            </CommonHeaderComponent>
            <View style={styles.mainContainer}>
                <Text style={styles.descTxt}>WhatsApp will need to verify your phone
                    number (carrier charges may apply).
                </Text>

                <View style={styles.inputContainer}>
                    <Pressable style={styles.countryContainer} onPress={() => navigation.navigate(ROUTE.COUNTRY as never)}>
                        <Text style={styles.countryName}>{userInfo.countryDigit.name}</Text>
                        <Icon name='chevron-right' size={responsiveWidth(20)} style={styles.icon} />
                    </Pressable>
                    <View style={styles.line} ></View>
                    <View style={styles.textInputContainer}>
                        <Text style={styles.text}>{userInfo.countryDigit.digit}</Text>
                        <TextInput
                            style={styles.textInput}
                            value={number}
                            keyboardType="numeric"
                            onChangeText={handleChange}
                            maxLength={11}
                        />
                    </View>
                </View>

            </View>



            <Modal
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(false);
                }}>
                <PhoneNumberModal setVisible={setVisible} />
            </Modal>
        </SafeAreaView>
    );
};


