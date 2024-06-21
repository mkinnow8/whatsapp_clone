import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { respFontSize, responsiveHeight, responsiveWidth, screenHeight, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.SEMI_TRANSPARENT
    },
    mainContainer: {
        backgroundColor: COLORS.WHITE,
        marginHorizontal: responsiveWidth(80),
        height: responsiveHeight(200),
        width: screenWidth - responsiveWidth(80),
        borderRadius: responsiveWidth(16),
        alignItems: 'center'
    },
    headerTxt: {
        fontSize: respFontSize(12),
        width: screenWidth - responsiveWidth(190),
        textAlign: 'center',
        marginTop: responsiveHeight(20)
    },
    number: {
        marginTop: responsiveHeight(20),
        fontSize: respFontSize(11)
    },
    bottomContainer: {
        marginTop: responsiveHeight(25)
    },
    line: {
        width: screenWidth - responsiveWidth(80),
        backgroundColor: COLORS.GREY,
        height: 0.2,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: screenWidth - responsiveWidth(80)
    },
    btn: {
        width: '50%',
        borderRightWidth: 0.2,
        height: responsiveHeight(44),
        justifyContent: 'center'
    },
    btn2: {
        width: '50%',
        height: responsiveHeight(44),
        justifyContent: 'center'
    },
    btnTxt: {
        color: COLORS.BLUE,
        textAlign: 'center',
        fontSize: respFontSize(12),
    }
})