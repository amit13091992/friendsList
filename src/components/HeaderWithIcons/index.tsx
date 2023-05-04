import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Home from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Notification from 'react-native-vector-icons/Entypo';
import { styles } from './styles';
import { IHeaderProps } from './IHeaderInterface';

const Header = (props: IHeaderProps) => {
  const { showBackArrow, showScreenName, showNotificationIcon, screenName, onPressBack, showHomeIcon, onPressHome, showMoreIcon, onPressMore, headerContainer } = props;
  return (
    <View style={[styles.container, headerContainer]}>
      <View style={styles.headerLeft}>
        <View style={{ flexDirection: 'row' }}>
          {showBackArrow && (
            <View style={styles.backArrowContainer}>
              <TouchableOpacity onPress={onPressBack}>
                <MaterialIcon name="arrow-back" size={24} color="#D3D3D2" />
              </TouchableOpacity>
            </View>
          )}
          {showScreenName && (
            <View style={styles.screenNameContainer}>
              <Text style={styles.screenName}>{screenName}</Text>
            </View>
          )}
        </View>
      </View>

      <View style={[styles.headerRight, { justifyContent: showHomeIcon ? 'flex-end' : 'space-around' }]}>
        {showNotificationIcon && (
          <View style={styles.notificationIconContainer}>
              <Notification name={"notifications"} size={24} color="red" />
          </View>
        )}
        {showHomeIcon && (
          <View style={styles.homeIconContainer}>
            <TouchableOpacity onPress={onPressHome}>
              <Home name={"home"} size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
        {showMoreIcon && (
          <View style={styles.moreIconContainer}>
            <TouchableOpacity onPress={onPressMore} hitSlop={{ left: 10, right: 10, top: 10, bottom: 10 }}>
              <EntypoIcon name="dots-three-vertical" size={16} color="#D3D3D2" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
}

export default Header;