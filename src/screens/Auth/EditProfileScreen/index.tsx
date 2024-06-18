import { View, Text, SafeAreaView, TextInput, Pressable, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { CommonHeaderComponent } from "../../../components";
import { respFontSize, responsiveHeight, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";
import { COLORS } from "../../../resources";
import { launchImageLibrary } from "react-native-image-picker";
import { useAppDispatch } from "../../../redux/hooks";
import { setNameAndImg } from "../../../redux/slices/UserInfoSlice";

type Props = {};

export const EditProfileScreen = (props: Props) => {
    const dispatch = useAppDispatch();
    const rightBtn1Press = () => {
        if (name && response) {
            dispatch(setNameAndImg({
                name: name,
                profilePhoto: response.assets[0].uri
            }))
        }
    }
    const [response, setResponse] = useState(null);
    const [length, setLength] = useState<number>(40);
    const [name, setName] = useState<string>('');
    useEffect(() => {
        setLength(40 - name.length);
    }, [name])
    const handleImagePicker = async () => {
        await launchImageLibrary({
            mediaType: "photo",
        }, response => {

            if (response.didCancel) {
                console.log('User canceled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else {
                console.log("response", response.assets[0].uri)
                setResponse(response);
            }
        });
    }
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeaderComponent rightButton1="Done" rightButton1Press={rightBtn1Press}>
                <Text style={styles.headerTxt}>Edit Profile</Text>
            </CommonHeaderComponent>

            <View style={styles.imgContainer}>
                <Pressable style={styles.imgView} onPress={() => handleImagePicker()}>
                    {response == null ? <Text style={styles.imgTxt}>add photo</Text> :
                        <Image source={{ uri: response?.assets[0]?.uri }} style={{ width: responsiveWidth(50), height: responsiveWidth(50), borderRadius: responsiveWidth(25) }} />
                    }
                </Pressable>
                <Text style={styles.profileTxt}>Enter your name and add an optional profile picture</Text>
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
