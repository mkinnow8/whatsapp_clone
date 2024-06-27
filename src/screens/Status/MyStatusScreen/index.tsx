import { View, Text, Image } from "react-native";
import React from "react";
import { useAppSelector } from "../../../redux/hooks";

import { screenWidth } from "../../../utilities/responsiveFunctions";

type Props = {};

export const MyStatusScreen = (props: Props) => {
    const statusList = useAppSelector(state => state.status.statusList
    )
    return (
        <View>
            <Image source={{ uri: statusList[0] }} style={{ width: screenWidth, height: 500 }} />
        </View>
    );
};

