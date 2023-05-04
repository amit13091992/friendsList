import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import STRING_CONSTANTS from '../utils/stringConstants';
import SettingsScreen from '../screens/SettingsScreen';
import FriendsScreen from '../screens/friendList/FriendsScreen';
import HomeScreen from '../screens/HomeScreen';
import Home from 'react-native-vector-icons/FontAwesome';
import Friends from 'react-native-vector-icons/FontAwesome5';
import Settings from 'react-native-vector-icons/Ionicons';
import { customScale } from '../utils/CustomScale';
import AddFriendScreen from '../screens/addFriend/AddFriendScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RenderTabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: styles.tabBarStyles,
      tabBarActiveTintColor: '#7abc3f',
      tabBarInactiveTintColor: '#20586a',
      tabBarLabelStyle: styles.tabBarLabelStyles
    }}>
    <Tab.Screen
      name={STRING_CONSTANTS.TABS.HOME}
      component={HomeScreen}
      options={{
        tabBarLabel: STRING_CONSTANTS.TABS.HOME,
        tabBarIcon: ({ focused }) => {
          const HomeIcon = focused ? <Home name={"home"} size={24} color="#7abc3f" /> : <Home name={"home"} size={24} color="#20586a" />
          return HomeIcon;
        },
      }}
    />
    <Tab.Screen
      name={STRING_CONSTANTS.TABS.FRIENDS}
      component={FriendsScreen}
      options={{
        tabBarLabel: STRING_CONSTANTS.TABS.FRIENDS,
        tabBarIcon: ({ focused }) => {
          const FriendIcon = focused ? <Friends name={"user-friends"} size={24} color="#7abc3f" /> : <Friends name={"user-friends"} size={24} color="#20586a" />
          return FriendIcon;
        },
      }}
      listeners={({ navigation }) => ({
        tabPress: (e) => {
          navigation.navigate({ name: STRING_CONSTANTS.TABS.FRIENDS, params: { isFrom: 'tabPress' } });
        },
      })}
    />
    <Tab.Screen
      name={STRING_CONSTANTS.TABS.SETTINGS}
      component={SettingsScreen}
      options={{
        tabBarLabel: STRING_CONSTANTS.TABS.SETTINGS,
        tabBarIcon: ({ focused }) => {
          const SettingIcon = focused ? <Settings name={"settings"} size={24} color="#7abc3f" /> : <Settings name={"settings"} size={24} color="#20586a" />
          return SettingIcon;
        },
      }}
    />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name={STRING_CONSTANTS.ROUTES.HOME_SCREEN} component={RenderTabs} />
      <Stack.Screen name={STRING_CONSTANTS.ROUTES.ADD_FRIEND} component={AddFriendScreen} />
      <Stack.Screen name={STRING_CONSTANTS.ROUTES.DETAILS} component={DetailsScreen} />

    </Stack.Navigator>
  )
}

export default AppNavigator;

const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: '#091e2f',
    borderTopWidth: 0,
    paddingVertical: customScale(5)
  },
  tabBarLabelStyles: {
    fontSize: customScale(12),
    fontWeight: '400',
    fontFamily: 'Rubik-Regular',
    lineHeight: customScale(18),
    letterSpacing: customScale(0.2)
  }
});
