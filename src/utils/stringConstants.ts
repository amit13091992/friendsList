const STRING_CONSTANTS = {
    APP_NAME: "NopalCyber",
    ROUTES: {
        LOGIN: 'login',
        HOME_SCREEN: 'HomeScreen',
        FRIENDS_SCREEN: 'FriendsScreen',
        SETTINGS_SCREEN: 'SettingsScreen',
        ADD_FRIEND: 'AddFriendScreen',
        DETAILS: 'DetailsScreen'
    },
    TABS: {
        HOME: 'Home',
        FRIENDS: 'Friends',
        SETTINGS: 'Settings'
    },
    REDUX_SLICES: {
        CYBER_RESILIENCY_SCORE: 'cyberResiliencyScoreReducer',
        HOME_SCREEN: 'homeScreenReducer',
        INCIDENT_SCREEN: 'incidentsScreenReducer',
        LOGIN_SCREEN: 'loginScreenReducer',
        PROFILE_SCREEN: 'profileScreenReducer',
        SECURITY_POSTURE_RISK_RATING: 'securityPosterRiskRatingReducer',
        SECURITY_VIOLATIONS: 'securityViolationsReducer',
        THREATS_SCREEN: 'threatsScreenReducer'
    },
    APP_STATES: {
        ACTIVE: 'active',
        BACKGROUND: 'background',
        INACTIVE: 'inactive',
        UNKNOWN: 'unknown'
    },
    OFFLINE_NOTICE: "NO INTERNET CONNECTION , PLEASE CHECK FOR PROPER CONNECTION",
    APP_EXIT_CONFIRMATION_MESSAGE: "Are you sure you want to exit App?",
    VIEW_MORE_LINK: 'View more',
    LOGIN_SCREEN: {
        FNAME_INPUT_LABEL: 'First Name',
        FNAME_INPUT_PLACEHOLDER: 'Enter your first name',
        FNAME_INPUT_ERROR_MESSAGE: 'Incorrect first name',
        LNAME_INPUT_LABEL: 'Last Name',
        LNAME_INPUT_PLACEHOLDER: 'Enter your last name',
        LNAME_INPUT_ERROR_MESSAGE: 'Incorrect last name',
        AGE_INPUT_LABEL: 'Age',
        AGE_INPUT_PLACEHOLDER: 'Enter your Age',
        AGE_INPUT_ERROR_MESSAGE: 'Incorrect Age',
        LOGIN_AUTH_ERROR_MESSAGE: 'Incorrect email or password',
        USER_BLOCKED_MESSAGE: 'You’ve been blocked, please try after 15 minutes',
        LOGIN_BUTTON_TITLE: 'Login',
        LOG_IN_BUTTON_TITLE: 'Add Friend',
        TROUBLE_SIGN_IN_LINK: 'Having Trouble Signing in?',
        SESSION_EXPIRED_TOAST_MESSAGE: 'Your session has expired. Please login again.',
        TROUBLE_SIGN_IN: 'Trouble Signing in?',
        PLEASE_CONTACT: 'Please contact',
        SUPPORT_LINK: 'support@nopalcyber.com',
        PROCEED_FURTHER: 'to proceed further.',
        POWERED_BY: 'Powered By',
    },
    HOME_SCREEN: {
    },
    JAILBREAK_SCREEN: {
        TITLE: 'Jailbroked device detected',
        OFFLINE_TEXT: 'For your safety, App is disabled on jailbroken devices. Please install and run the app on another device that is not jailbroken.',
        SUBTITLE: 'If you think this is an error, please contact us via support@appname.com'
    },
    ERROR_BOUNDRY: {
        OOPS: 'Oops!',
        ERROR: 'There\'s an error',
        TRY_AGAIN: 'Try again'
    },
    COMMON: {
    },
    API_SERVICE: {
        AUTHORIZATION: 'Authorization',
        BEARER: "bearer ",
        ACCEPT: 'Accept',
        CONTENT_TYPE: 'Content-Type',
        CONTENT_HEADERS: {
            JSON: 'application/json',
            FORM_DATA: 'multipart/form-data',
            PLAIN: 'text/plain'
        }
    }
}

export default STRING_CONSTANTS; 
