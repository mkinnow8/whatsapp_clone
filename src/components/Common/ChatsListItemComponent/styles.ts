import { StyleSheet } from "react-native";
import {COLORS} from "../../../resources/colors";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    itemContainer: {
        padding: responsiveWidth(12), flexDirection: 'row', alignItems: 'center',
        paddingVertical: responsiveHeight(10),
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
           
    }
})