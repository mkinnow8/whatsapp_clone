import { View, Text, SafeAreaView, Image, Pressable } from "react-native";
import React from "react";
import { HomeAuthIcon } from "../../../assets/icons";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { ROUTE } from "../../../resources";

type Props = {};

export const WelcomeAuthScreen = (props: Props) => {
    const navigation = useNavigation();
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


            <Pressable onPress={() => navigation.navigate(ROUTE.PHONE_NUMBER as never)}>
                <Text style={styles.bottomTxt}>Agree & Continue</Text>
            </Pressable>
        </SafeAreaView>
    );
};


