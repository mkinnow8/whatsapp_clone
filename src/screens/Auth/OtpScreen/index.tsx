import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { RefObject, useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { CommonHeaderComponent, OtpInput } from "../../../components";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../resources";
import { useAppSelector } from "../../../redux/hooks";

type Props = {};

export const OtpScreen = (props: Props) => {
    const navigation = useNavigation()
    const leftBtn1Press = () => {
        navigation.goBack();
    }
    const [codes, setCodes] = useState<string[] | undefined>(Array(6).fill(""));
    const userInfo = useAppSelector(state => state.userInfo.userInfo)
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeaderComponent leftIcon1="chevron-left" leftButton1="Edit Number" leftButton1Press={leftBtn1Press}>
                <Text style={styles.headerTxt}>{userInfo.countryDigit.digit} {userInfo.phoneNumber}</Text>
            </CommonHeaderComponent>
            <View style={styles.descTxtContainer}>
                <Text style={styles.descTxt}>
                    We have sent you an SMS with a
                    code to the number above.
                </Text>
                <Text style={styles.descTxt}>
                    To complete your phone number
                    verification, please enter the 6-digit
                    activation code.
                </Text>
            </View>
            <View >
                <OtpInput codes={codes!}
                />
            </View>
            <TouchableOpacity style={styles.btnContainer}>
                <Text style={styles.btnTxt}>Didn't receive a verification code?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};


