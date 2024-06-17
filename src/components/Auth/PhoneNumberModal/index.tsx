import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../../resources";

type Props = {
    number?: string,
    countryDigit: string,
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
};

export const PhoneNumberModal = ({ number, countryDigit, setVisible }: Props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <Text style={styles.headerTxt}>NUMBER CONFIRMATION:</Text>
                <Text style={styles.number}>{countryDigit} {number}</Text>
                <Text style={styles.headerTxt}>Is your phone number above correct?</Text>
                <View style={styles.bottomContainer}>
                    <View style={styles.line}></View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.btn} onPress={() => setVisible(false)} >
                            <Text style={styles.btnTxt}>Edit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn2} onPress={() => {
                            setVisible(false);
                            navigation.navigate(ROUTE.OTP as never)
                        }}>
                            <Text style={styles.btnTxt}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

