import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { respFontSize, responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE_GREY
    },
    headerTxt: {
        fontSize: respFontSize(12),
        fontWeight: '600'
    },
    descTxtContainer: {
        marginVertical: responsiveHeight(80),
        marginHorizontal: responsiveWidth(65),
        gap: responsiveHeight(20)
    },
    descTxt: {
        color: COLORS.GREY,
        fontSize: respFontSize(12),
        textAlign: 'center'
    },
    btnContainer: {
        marginTop: responsiveHeight(80)
    },
    btnTxt: {
        color: COLORS.BLUE,
        textAlign: 'center',
        fontSize: respFontSize(12),
    }
})