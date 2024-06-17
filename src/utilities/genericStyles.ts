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
        fontSize: respFontSize(8),
        color: COLORS.BLACK
    },
    textMed: {
        fontSize: respFontSize(12),
        color: COLORS.BLACK
    },
    textLarge: {
        fontSize: respFontSize(13),
        fontWeight: '500',
        color: COLORS.BLACK
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