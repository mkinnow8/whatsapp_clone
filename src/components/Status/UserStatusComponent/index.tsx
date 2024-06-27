import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { styles } from "./styles";
import { genericStyles } from "../../../utilities/genericStyles";
import { useAppSelector } from "../../../redux/hooks";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";
import { cameraIcon, editIcon, plusIcon } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/core";
import { ROUTE } from "../../../resources";


type Props = {};

export const UserStatusComponent = (props: Props) => {
    const navigation = useNavigation();
    const userInfo = useAppSelector(state => state.userInfo.userInfo);
    console.log(userInfo);
    return (
        <View style={styles.container}>
            <View>
                <Pressable style={[styles.imageContainer, { gap: responsiveWidth(8) }]} onPress={() => navigation.navigate(ROUTE.CAMERA as never)}>
                    <View style={styles.imageView}>
                        <Image source={{ uri: userInfo.profilePhoto }} style={styles.image} />
                        <Image source={plusIcon} style={styles.plus} />
                    </View>
                    <View>
                        <Text style={[{ fontWeight: '800' }, genericStyles.textMed]}>My Status</Text>
                        <Text >Add to my status</Text>

                    </View>
                </Pressable>
            </View>
            <View style={styles.rightContainer}>
                <Pressable style={styles.iconView}>
                    <Image source={cameraIcon} style={styles.icon} />
                </Pressable>
                <Pressable style={styles.iconView}>
                    <Image source={editIcon} style={styles.icon} />
                </Pressable>
            </View>
        </View>
    );
};

