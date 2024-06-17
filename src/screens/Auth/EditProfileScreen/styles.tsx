import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { respFontSize, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE
    },
    headerTxt: {
        fontSize: respFontSize(12),
        fontWeight: '600'
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