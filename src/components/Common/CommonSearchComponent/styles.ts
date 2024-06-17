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

        paddingHorizontal: responsiveWidth(4),
        height: responsiveHeight(24),
        
    },
    searchText: {
        flex: 1,
        height: responsiveHeight(32)
    },

})