import { StyleSheet } from "react-native";
import {COLORS} from "../../../resources/colors";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    searchContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.LIGHT_BACKGROUND_GREY,
        alignItems: 'center',
        borderRadius: 8,
        paddingHorizontal: responsiveWidth(6),
        height: responsiveHeight(28),
    },
    searchText: {
        textAlignVertical: 'center',
        padding: 0,
        paddingLeft: responsiveWidth(6)
    },
    iconStyle: {
        height: responsiveHeight(12),
        width: responsiveHeight(12),
    },
})