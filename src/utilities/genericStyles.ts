import { StyleSheet } from "react-native";
import { COLORS } from "../resources";
import { respFontSize, responsiveHeight, responsiveWidth } from "./responsiveFunctions";

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
        color: COLORS.BLACK
    },
    fw500:{
        fontWeight: '500',
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
    mh12:{
        marginHorizontal: responsiveWidth(12),
    },
    mv12: {
        marginVertical: responsiveHeight(12),
    },
    mt8:{
        marginTop: responsiveHeight(8),
    },
    pl8: {
        paddingLeft: responsiveWidth(8)
    },
    pl12: {
        paddingLeft: responsiveWidth(12)
    },
    pv8: {
        paddingVertical: responsiveHeight(8),
    },
    pv12: {
        paddingVertical: responsiveHeight(12),
    },
    ph12: {
        paddingHorizontal: responsiveWidth(12),
    }
})