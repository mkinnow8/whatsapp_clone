import { StyleSheet } from "react-native";
import {COLORS} from "../../../resources/colors";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row', alignItems: 'center',
        paddingVertical: responsiveHeight(6),
        backgroundColor: COLORS.WHITE,
  
    },
    image: {
        borderRadius: 50, height: responsiveWidth(40), width: responsiveWidth(40)
    },
    centerContainer: {
        flex: 1, marginStart: responsiveWidth(12)
    },

})