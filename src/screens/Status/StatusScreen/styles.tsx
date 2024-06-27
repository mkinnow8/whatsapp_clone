import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { responsiveHeight, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.BGCOLOR,
    },
    headerTxt: {
        marginTop: responsiveHeight(12),
    },
    search: {
        marginHorizontal: responsiveWidth(12),
        marginTop: responsiveHeight(8),
    },
    searchContainer: {
        marginVertical: responsiveHeight(12),
    },
    statusContainer: {
        backgroundColor: COLORS.WHITE,
        width: screenWidth,
        marginTop: responsiveHeight(20)
    },
})