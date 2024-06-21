import { StyleSheet } from "react-native";
import { COLORS } from "../../../resources";
import { responsiveHeight } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.SEMI_TRANSPARENT,
        alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
    },
    subContainer: {
        height: '90%',
        width: "100%",
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        padding: 20,
        paddingBottom: responsiveHeight(10),
        paddingTop: responsiveHeight(10),        
    },
    headingText:{
        flex:1,
        fontWeight: "bold",
        textAlign: 'center',
        marginBottom: responsiveHeight(2),
        marginTop: responsiveHeight(2),
    },
    closeButton: {
        backgroundColor: COLORS.LIGHT_BACKGROUND_GREY,
        borderRadius: 20,
    }
})