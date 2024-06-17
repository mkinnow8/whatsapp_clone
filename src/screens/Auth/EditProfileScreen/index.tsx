import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { CommonHeaderComponent } from "../../../components";
import { respFontSize, responsiveHeight, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";
import { COLORS } from "../../../resources";

type Props = {};

export const EditProfileScreen = (props: Props) => {
    const rightBtn1Press = () => {

    }
    const [length, setLength] = useState<number>(30);
    const [name, setName] = useState<string>('');
    useEffect(() => {
        setLength(40 - name.length);
    }, [name])
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeaderComponent rightButton1="Done" rightButton1Press={rightBtn1Press}>
                <Text style={styles.headerTxt}>Edit Profile</Text>
            </CommonHeaderComponent>

            <View style={{ marginLeft: responsiveWidth(12), marginTop: responsiveHeight(50), flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                <View style={{ width: responsiveWidth(50), height: responsiveWidth(50), borderWidth: 1, borderRadius: responsiveWidth(25), alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ color: COLORS.BLUE, textAlign: 'center' }}>add photo</Text>
                </View>
                <Text style={{ color: COLORS.GREY, width: screenWidth - responsiveWidth(150), fontSize: respFontSize(12) }}>Enter your name and add an optional profile picture</Text>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.line}></View>
                <View style={styles.textInputContainer}>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        style={styles.txtInput}
                    />
                    <Text style={styles.text}>{length}</Text>
                </View>
                <View style={styles.line}></View>
            </View>

        </SafeAreaView >
    );
};
