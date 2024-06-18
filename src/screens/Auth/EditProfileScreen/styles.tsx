import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { respFontSize, responsiveHeight, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    headerTxt: {
        fontSize: respFontSize(12),
        fontWeight: '600'
    },
    imgContainer: {
        marginLeft: responsiveWidth(12),
        marginTop: responsiveHeight(50),
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        marginBottom: responsiveHeight(30)
    },
    imgTxt: {
        color: COLORS.BLUE,
        textAlign: 'center'
    },
    profileTxt: {
        color: COLORS.GREY,
        width: screenWidth - responsiveWidth(150),
        fontSize: respFontSize(12)
    },
    imgView: {
        width: responsiveWidth(50),
        height: responsiveWidth(50),
        borderWidth: 0.3,
        borderRadius: responsiveWidth(25),
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    textInputContainer: {
        alignItems: 'center',
        marginLeft: responsiveWidth(12),
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    text: {
        fontSize: respFontSize(12),
        color: COLORS.GREY
    },
    txtInput: {
        width: screenWidth - responsiveWidth(40),
        fontSize: respFontSize(12)

    },
    line: {
        width: screenWidth - responsiveWidth(12),
        backgroundColor: COLORS.GREY,
        height: 0.5,
        marginLeft: responsiveWidth(10),
        marginVertical: responsiveWidth(10)
    },

})