import { StyleSheet } from "react-native";
import {COLORS} from "../../../resources/colors";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    itemContainer: {
        padding: responsiveWidth(12), flexDirection: 'row', alignItems: 'center',
        paddingVertical: responsiveHeight(10),
        backgroundColor: COLORS.WHITE,
           
    },
    image: {
        borderRadius: 50, height: 50, width: 50
    },
    centerContainer: {
        flex: 1, marginStart: responsiveWidth(12)
    },
    unreadContainer: {
        backgroundColor: COLORS.BLUE,
        justifyContent: 'center',
        borderRadius: 50,
        height: 20,
        width: 20,
    },
    unreadText: {
        textAlign: 'center',
        color: COLORS.WHITE,
    },
    slideButton: {
        height: responsiveHeight(64),
        width: responsiveWidth(64),
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        zIndex: -1,
    }
})