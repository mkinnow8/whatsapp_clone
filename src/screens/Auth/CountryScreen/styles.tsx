import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { respFontSize, responsiveHeight, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE_BG
    },
    headerTxt: {
        fontSize: respFontSize(12),
        fontWeight: '600'
    },
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        marginTop: responsiveHeight(12)
    },
    itemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(12),
        paddingVertical: responsiveHeight(8),

    },
    item: {
        fontSize: respFontSize(12)
    },
    selectedItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 3
    },
    line: {
        width: screenWidth - responsiveWidth(12),
        backgroundColor: COLORS.GREY,
        height: 0.5,
        marginLeft: responsiveWidth(10),
        marginBottom: responsiveWidth(10)
    },
});