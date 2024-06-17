import { StyleSheet } from "react-native";
import { COLORS } from "../resources";
import { respFontSize, responsiveWidth } from "./responsiveFunctions";

export const genericStyles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    blueText: {
        color: COLORS.BLUE,
    },
    textSmall: {
        fontSize: respFontSize(10)
    },
    textMed: {
        fontSize: respFontSize(12)
    },
    textLarge: {
        fontSize: respFontSize(14)
    },
    mr12: {
        marginRight: responsiveWidth(12),
    },
    mr8: {
        marginRight: responsiveWidth(8),
    },
    ml12: {
        marginLeft: responsiveWidth(12),
    },
    ml8: {
        marginLeft: responsiveWidth(8),
    },
})