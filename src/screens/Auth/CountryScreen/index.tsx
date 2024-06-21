import { View, Text, SafeAreaView, FlatList, Image, Pressable } from "react-native";
import React, { useState } from "react";
import { CommonHeaderComponent, CommonSearchComponent } from "../../../components";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../resources";
import { responsiveHeight, responsiveWidth, screenHeight } from "../../../utilities/responsiveFunctions";


import { country } from "../../../utilities/dataObjects";
import { SelectedIcon } from "../../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setCountryDigit } from "../../../redux/slices/UserInfoSlice";

type Props = {};

export const CountryScreen = (props: Props) => {
    const navigation = useNavigation()
    const leftBtn1Press = () => {
        navigation.goBack();
    }
    const dispatch = useAppDispatch();
    const userInfo = useAppSelector(state => state.userInfo.userInfo.countryDigit);
    const [data, setData] = useState(country);
    const [searchText, setSearchText] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState(userInfo.id);
    const handleclick = (id: number) => {
        setSelectedItem(id);
        dispatch(setCountryDigit({ countryDigit: country[id - 1] }));
    }
    const handleSearch = (searchText: string) => {
        setSearchText(searchText)
        if (searchText) {
            const newData = country.filter(item => {
                const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
                const textData = searchText.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setData(newData);
        } else {
            setData(country);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeaderComponent leftButton1="Edit Number" leftIcon1="chevron-left" leftButton1Press={leftBtn1Press}>
                <Text style={styles.headerTxt}>Your Country</Text>
            </CommonHeaderComponent>
            <View style={{ height: 34, marginHorizontal: responsiveWidth(12) }}>
                <CommonSearchComponent searchText={searchText} setSearchText={handleSearch} />
            </View>

            <View style={styles.mainContainer}>
                <FlatList

                    data={data}
                    renderItem={({ item }) => {
                        return (<><Pressable style={styles.itemContainer} onPress={() => handleclick(item.id)}>
                            <Text style={styles.item}>{item.name}</Text>
                            <View style={styles.selectedItem}>
                                <Text style={styles.item}>{item.digit}</Text>
                                {selectedItem == item.id && <Image source={SelectedIcon} />}
                            </View>

                        </Pressable>
                            <View style={styles.line}></View>
                        </>
                        )
                    }}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>



        </SafeAreaView >
    );
};

