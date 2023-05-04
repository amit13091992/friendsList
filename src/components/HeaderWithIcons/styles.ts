import { StyleSheet, StatusBar } from "react-native";
import { customScale } from "../../utils/CustomScale";

export const styles = StyleSheet.create({
    container: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: customScale(16),
        paddingRight: customScale(18.5),
        backgroundColor: '#20586a'
    },
    headerLeft: {
        flex: 0.8
    },
    backArrowContainer: {
        flex: 0.15,
        justifyContent: 'center',
        marginTop: customScale(5)
    },
    screenNameContainer: {
        flex: 0.85,
        justifyContent: 'center'
    },
    screenName: {
        color: '#F4F5F6',
        fontSize: customScale(14),
        lineHeight: customScale(21),
        fontWeight: '400',
        fontFamily: 'Rubik-Regular',
        letterSpacing: customScale(0.2)
    },
    headerRight: {
        flex: 0.2,
        alignItems: 'center',
        flexDirection: 'row'
    },
    countryButton: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'grey',
        height: customScale(28),
        width: customScale(62)
    },
    notificationIconContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reportIconContainer: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    homeIconContainer: {
        flex: 0.25,
        justifyContent: 'center'
    },
    moreIconContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },

});