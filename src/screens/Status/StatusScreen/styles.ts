import { StyleSheet } from "react-native";
import {COLORS} from "../../../resources/colors";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.WHITE
  },
  search: {
    marginHorizontal: responsiveWidth(12),
    marginTop: responsiveHeight(8),
  }
})