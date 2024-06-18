import { StyleSheet } from "react-native";
import { respFontSize, responsiveWidth, screenWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginVertical: 20,
        width: screenWidth - responsiveWidth(140),
        marginHorizontal: responsiveWidth(70)
    },
    input: {
        fontWeight: 'bold',
        fontSize: respFontSize(12)
    },

});