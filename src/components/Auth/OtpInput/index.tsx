import { View, Text, TextInput } from "react-native";
import React, { RefObject, useMemo, useRef, useState } from "react";
import { styles } from "./styles";


interface OTPInputProps {
    codes: string[];


}
export const OtpInput = ({ codes }: OTPInputProps) => {
    const [text, onChangeText] = useState('');
    let inputRef = useRef();
    const onPress = () => inputRef.current?.focus();

    const otpContent = useMemo(() =>
        <View >
            {Array.from({ length: 6 }).map((_, i) => (
                <Text
                    onPress={onPress}
                >
                    {text[i]}
                </Text>
            ))}
        </View>
        , [text]);
    return (
        <View style={styles.container}>

            <TextInput
                maxLength={6}
                ref={inputRef}
                style={styles.input}
                onChangeText={text => onChangeText(text)}
                value={text}
                keyboardType="numeric"
            />

            {otpContent}
        </View>
    );
};


