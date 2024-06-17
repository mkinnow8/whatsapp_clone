import { StyleSheet } from "react-native";
import { respFontSize, responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";
import { COLORS } from "../../../resources";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE
    },
    image: {
        marginVertical: responsiveHeight(70)
    },
    headerTxt: {
        fontSize: respFontSize(22),
        fontWeight: 'bold',
        width: responsiveWidth(240),
        textAlign: 'center'
    },
    bodyView: {
        marginVertical: responsiveHeight(40),
        marginHorizontal: responsiveWidth(65)
    },
    descTxt: {
        fontSize: respFontSize(11),
        textAlign: 'center',
        lineHeight: responsiveHeight(20),
        fontWeight: "300"
    },
    btnTxt: {
        color: COLORS.BLUE,
        fontSize: respFontSize(11),
    },
    bottomTxt: {
        color: COLORS.BLUE,
        fontWeight: 'bold',
        fontSize: respFontSize(16),
        marginVertical: responsiveHeight(50)
    }

})