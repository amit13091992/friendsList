import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/HeaderWithIcons';
import { customScale } from '../utils/CustomScale';

const DetailsScreen = (props: { navigation: { navigate: (arg0: any) => void; goBack: () => void; }; }) => {

    const { details } = props?.route?.params;

    return (
        <View style={{ flex: 1, backgroundColor: '#20586a' }}>
            <Header
                showBackArrow={true}
                onPressBack={() => props.navigation.goBack()}
                showScreenName={true}
                screenName={"Details"}
                headerContainer={{ flex: 0.08 }}
            />

            <View style={{ paddingTop: customScale(50), paddingHorizontal: customScale(20), justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontWeight: '700', fontSize: customScale(15), color: 'white' }}>First name: </Text>
                    <Text style={{ fontWeight: '400', fontSize: customScale(18), color: 'white' }}>{details?.firstName}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: customScale(10) }}>
                    <Text style={{ fontWeight: '700', fontSize: customScale(15), color: 'white' }}>Last name: </Text>
                    <Text style={{ fontWeight: '400', fontSize: customScale(18), color: 'white' }}>{details?.lastName}</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingTop: customScale(10) }}>
                    <Text style={{ fontWeight: '700', fontSize: customScale(15), color: 'white' }}>Age: </Text>
                    <Text style={{ fontWeight: '400', fontSize: customScale(18), color: 'white' }}>{details?.info?.age}</Text>
                </View>
            </View>
        </View>
    )
}

export default DetailsScreen;