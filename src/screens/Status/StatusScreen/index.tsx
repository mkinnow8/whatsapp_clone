import { View, Text, SafeAreaView, Pressable } from "react-native";
import React, { useState } from "react";
import { CommonHeaderComponent, CommonSearchComponent, HeadingComponent, UserStatusComponent, } from "../../../components";
import { useNavigation } from "@react-navigation/core";
import { ROUTE } from "../../../resources";
import { styles } from "./styles";
import { genericStyles } from "../../../utilities/genericStyles";
import { useAppSelector } from "../../../redux/hooks";

type Props = {};

export const StatusScreen = (props: Props) => {
    const navigation = useNavigation();
    const statusList = useAppSelector(state => state.status.statusList);
    const [searchText, setSearchText] = useState<string>('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    // const [newChatModal, setNewChatModal] = useState(false);
    // const [editMode, setEditMode] = useState(false);
    // const openNewChatModal = () => {
    //     setNewChatModal(true);
    // };
    // const onModalClose = () => {
    //     setNewChatModal(false);
    // };
    // const onEdit = () => {
    //     if (editMode) {
    //         //   setSelectedEdit([]);
    //     }
    //     setEditMode(!editMode);
    //     // setIsTabHidden(!isTabHidden);
    // };

    return (
        <SafeAreaView style={[styles.container,]}>
            <Pressable style={[genericStyles.mt8, genericStyles.pl12]}>
                <Text style={[genericStyles.textLarge, genericStyles.blueText]}>Privacy</Text>
            </Pressable>
            <View style={styles.headerTxt}>
                <HeadingComponent text={'Chats'} />

            </View>


            <View style={[styles.search, styles.searchContainer]}>
                <CommonSearchComponent
                    searchText={searchText}
                    setSearchText={setSearchText}
                    isSearchFocused={isSearchFocused}
                    setIsSearchFocused={setIsSearchFocused}
                /></View>
            <View style={[styles.statusContainer]}>
                <UserStatusComponent />
            </View>
            <View>
                <Pressable onPress={() => navigation.navigate(ROUTE.MY_STATUS as never)}>
                    <Text>Hello</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};


