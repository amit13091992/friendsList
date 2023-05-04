import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import AddUser from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import STRING_CONSTANTS from '../../utils/stringConstants';
import { customScale } from '../../utils/CustomScale';

const FriendsScreen = (props: { navigation: { navigate: (arg0: any) => void; }; }) => {
    const data = [
        { firstName: 'Elson', lastName: 'Correia', info: { age: 24 } },
        { firstName: 'John', lastName: 'Doe', info: { age: 18 } },
        { firstName: 'Jane', lastName: 'Doe', info: { age: 34 } },
        { firstName: 'Maria', lastName: 'Carvalho', info: { age: 22 } },
        { firstName: 'Kelly', lastName: 'Correia', info: { age: 23 } },
        { firstName: 'Don', lastName: 'Quichote', info: { age: 39 } },
        { firstName: 'Marcus', lastName: 'Correia', info: { age: 56 } },
        { firstName: 'Bruno', lastName: 'Gonzales', info: { age: 25 } },
        { firstName: 'Alonzo', lastName: 'Correia', info: { age: 44 } },
        { firstName: 'Avici', lastName: 'James', info: { age: 33 } },
        { firstName: 'Peter', lastName: 'Parker', info: { age: 50 } },
        { firstName: 'Samsom', lastName: 'Richard', info: { age: 30 } },
    ]

    const _renderItem = (item?: any) => {
        return (
            <TouchableOpacity style={{ backgroundColor: 'white', marginTop: customScale(10), paddingLeft: customScale(10), paddingVertical: customScale(10), borderRadius: customScale(10) }} onPress={() => {
                props.navigation.navigate({ name: STRING_CONSTANTS.ROUTES.DETAILS, params: { details: item } })
            }}>
                <Text style={{ fontSize: customScale(16), fontWeight: '600', color: 'black' }}>{item?.firstName + " " + item?.lastName}</Text>
                <Text style={{ fontSize: customScale(14.5), fontWeight: '400', color: 'black' }}>{"Age: " + item?.info?.age}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#20586a' }}>
            {data?.length > 0 ? <FlatList
                data={data}
                renderItem={({ item }: any) => _renderItem(item)}
                keyExtractor={(item, index) => String(index)}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 10, marginHorizontal: 10, paddingBottom: 30 }}
            /> : <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Add Friends!</Text>
            </View>}

            <ActionButton
                onPress={() => props.navigation.navigate({ name: STRING_CONSTANTS.ROUTES.ADD_FRIEND, params: {} })}
                size={45}
                buttonColor={"#7abc3f"}
                position={"right"}
                renderIcon={() => <AddUser name={"user-plus"} size={24} color="white" />}
            />
        </View>
    )
}

export default FriendsScreen;