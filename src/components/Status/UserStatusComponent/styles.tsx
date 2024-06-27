import { StyleSheet } from "react-native";
import { responsiveHeight, responsiveWidth } from "../../../utilities/responsiveFunctions";

export const styles = StyleSheet.create({
    container: {
        marginVertical: responsiveHeight(8),
        marginHorizontal: responsiveWidth(12),
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    imageView: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
    },
    image: {
        width: responsiveWidth(40),
        height: responsiveWidth(40),
        borderRadius: responsiveWidth(20),
    },
    plus: {
        position: 'absolute',
        width: responsiveWidth(15),
        height: responsiveWidth(15),
        left: "70%",
        top: "60%"
    },
    rightContainer: {
        marginRight: responsiveWidth(12),
        flexDirection: 'row',
        gap: responsiveWidth(4),
        marginTop: responsiveHeight(18),
    },
    iconView: {
        width: responsiveWidth(20),
        height: responsiveWidth(20),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: responsiveWidth(10),
        backgroundColor: '#F7F7F7'
    },
    icon: {
        width: responsiveWidth(12),
        height: responsiveWidth(10)
    }
})