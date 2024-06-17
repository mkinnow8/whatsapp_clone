import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { HomeAuthIcon } from "../../assets/icons";
import { styles } from "./styles";

type Props = {};

export const HomeAuthScreen = (props: Props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={HomeAuthIcon} style={styles.image} />
            <Text style={styles.headerTxt}>Welcome to WhatsApp</Text>
            <View style={styles.bodyView}>
                <Text style={styles.descTxt}>Read our

                    <Text style={styles.btnTxt}> Privacy Policy. </Text>

                    Tap Agree & Continue to accept the

                    <Text style={styles.btnTxt}> Terms of service. </Text>

                </Text>

            </View>


            <Pressable>
                <Text style={styles.bottomTxt}>Agree & Continue</Text>
            </Pressable>
        </SafeAreaView>
    );
};


