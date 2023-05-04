import { ImageSourcePropType, StyleProp } from "react-native";

export interface IHeaderProps {
    showAppName?: boolean;
    showBackArrow?: boolean;
    showScreenName?: boolean;
    showNotificationIcon?: boolean;
    showReportIcon?: boolean;
    showHomeIcon?: boolean;
    showCountryIcon?: boolean;
    languageIcon?: ImageSourcePropType;
    showMoreIcon?: boolean;
    screenName?: string;
    onPressBack?: () => void;
    onPressReport?: () => void;
    onPressHome?: () => void;
    onPressCountry?: () => void;
    onPressMore?: () => void;
    headerContainer?: StyleProp<any>;
    tenantName?: string;
}
