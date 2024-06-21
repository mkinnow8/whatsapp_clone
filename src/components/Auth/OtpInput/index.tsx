import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { RefObject, useMemo, useRef, useState } from "react";
import { COLORS, ROUTE } from "../../../resources";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";




export const OtpInput = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const inputs = useRef([]);
    const navigation = useNavigation();
    const focusNextInput = (index: number, value: string) => {
        if (value) {
            if (index < inputs.current.length - 1) {
                inputs.current[index + 1].focus();
            }
        }
    };

    const focusPreviousInput = (index: number) => {
        if (index > 0) {
            inputs.current[index - 1].focus();
        }
    };

    const handleChange = (text: string, index: number) => {
        const newOtp = [...otp];
        newOtp[index] = text;
        setOtp(newOtp);

        if (text.length === 1) {
            if (index == 5) {
                navigation.navigate(ROUTE.EDIT_PROFILE as never);
            }
            focusNextInput(index, text);
        } else {
            focusPreviousInput(index);
        }
    };
    return (
        <View style={styles.container}>
            {otp.map((digit, index) => (
                <TextInput
                    key={index}
                    ref={(ref) => (inputs.current[index] = ref)}
                    style={styles.input}
                    value={digit}
                    onChangeText={(text) => handleChange(text, index)}
                    keyboardType="numeric"
                    maxLength={1}
                    placeholder="-"
                    placeholderTextColor={COLORS.BLACK}

                />
            ))}
        </View>
    );
};


