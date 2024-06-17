import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { respFontSize, responsiveHeight, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: COLORS.BGCOLOR
    },
    descTxt: {
        color: COLORS.GREY,
        marginHorizontal: responsiveWidth(40),
        fontSize: respFontSize(12),
        textAlign: 'center'
    },
    inputContainer: {
        backgroundColor: COLORS.WHITE,
        marginHorizontal: responsiveWidth(20),
        borderRadius: responsiveWidth(10),
        marginVertical: responsiveHeight(20),
        width: screenWidth - responsiveWidth(20),
        flexDirection: 'column'
    },
    countryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: responsiveWidth(10),
        marginVertical: responsiveHeight(10),
    },
    countryName: {
        fontSize: respFontSize(14),
        color: COLORS.BLUE
    },
    icon: {
        color: COLORS.GREY
    },
    line: {
        width: screenWidth - responsiveWidth(30),
        backgroundColor: COLORS.GREY,
        height: 0.5,
        marginLeft: responsiveWidth(10),
        marginBottom: responsiveWidth(10)
    },
    textInputContainer: {
        flexDirection: 'row',
        marginBottom: responsiveHeight(10),
        marginLeft: responsiveWidth(10),
    },
    text: {
        fontSize: respFontSize(14),
        marginRight: responsiveWidth(10)
    },
    textInput: {
        fontSize: respFontSize(14),
    }


})