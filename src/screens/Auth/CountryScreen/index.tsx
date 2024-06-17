import { View, Text, SafeAreaView, FlatList, Image } from "react-native";
import React, { useState } from "react";
import { CommonHeaderComponent, CommonSearchComponent } from "../../../components";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { COLORS } from "../../../resources";
import { responsiveHeight, responsiveWidth, screenHeight } from "../../../utilities/responsiveFunctions";


import { country } from "../../../utilities/dataObjects";
import { SelectedIcon } from "../../../assets/icons";

type Props = {};

export const CountryScreen = (props: Props) => {
    const navigation = useNavigation()
    const leftBtn1Press = () => {
        navigation.goBack();
    }
    const [selectedItem, setSelectedItem] = useState(4);
    return (
        <SafeAreaView style={styles.container}>
            <CommonHeaderComponent leftButton1="Edit Number" leftIcon1="chevron-left" leftButton1Press={leftBtn1Press}>
                <Text style={styles.headerTxt}>Your Country</Text>
            </CommonHeaderComponent>
            <View style={{ height: 34, marginHorizontal: responsiveWidth(12) }}>
                <CommonSearchComponent />
            </View>

            <View style={styles.mainContainer}>
                <FlatList

                    data={country}
                    renderItem={({ item }) => {
                        return (<><View style={styles.itemContainer}>
                            <Text style={styles.item}>{item.name}</Text>
                            <View style={styles.selectedItem}>
                                <Text style={styles.item}>{item.digit}</Text>
                                {selectedItem == item.id && <Image source={SelectedIcon} />}
                            </View>

                        </View>
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

