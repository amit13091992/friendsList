import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
// import AuthNavigator from './AuthNavigator';
// import { useSelector } from 'react-redux';
// import { selectIsLoggedIn } from '../redux/loginScreenSlice';
import navigationService from '../utils/services/navigationService';

const AppRoute = () => {
    // const isLoggedIn = useSelector(selectIsLoggedIn);
    // return (
    //     <NavigationContainer ref={navigatorRef => navigationService.setTopLevelNavigator(navigatorRef)}>
    //         {
    //             isLoggedIn ? <AppNavigator /> : <AuthNavigator />
    //         }
    //     </NavigationContainer>
    // )
    return (
        <NavigationContainer ref={navigatorRef => navigationService.setTopLevelNavigator(navigatorRef)}><AppNavigator /></NavigationContainer>
    )
}

export default AppRoute;
