import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Icon from 'react-native-vector-icons/Feather'
import { responsiveWidth } from "../../../utilities/responsiveFunctions";
type Props = {};

export const PhoneNumberScreen = (props: Props) => {
    const [number, setNumber] = useState<string>();
    const handleChange = (number: string) => {
        // Remove any non-numeric characters and spaces
        let cleanText = number.replace(/[^0-9]/g, '');

        // Limit the text to 10 digits
        if (cleanText.length > 10) {
            cleanText = cleanText.slice(0, 10);
        }

        // Format the text with a space after the fifth digit
        if (cleanText.length > 5) {
            cleanText = cleanText.slice(0, 5) + ' ' + cleanText.slice(5);
        }

        setNumber(cleanText);
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.descTxt}>WhatsApp will need to verify your phone
                number (carrier charges may apply).
            </Text>

            <View style={styles.inputContainer}>
                <View style={styles.countryContainer}>
                    <Text style={styles.countryName}>India</Text>
                    <Icon name='chevron-right' size={responsiveWidth(20)} style={styles.icon} />
                </View>
                <View style={styles.line} ></View>
                <View style={styles.textInputContainer}>
                    <Text style={styles.text}>+91</Text>
                    <TextInput
                        style={styles.textInput}
                        value={number}
                        keyboardType="numeric"
                        onChangeText={handleChange}
                        maxLength={11}

                    />
                </View>
            </View>
        </SafeAreaView>
    );
};


