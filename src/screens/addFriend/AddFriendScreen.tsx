import { View, Text, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import Header from '../../components/HeaderWithIcons';
import { customScale } from '../../utils/CustomScale';
import TextInput from '../../components/TextInput';
import { styles } from './styles';
import STRING_CONSTANTS from '../../utils/stringConstants';
import { NAME_REGREX } from '../../utils/helpers';

const AddFriendScreen = (props: { navigation: { navigate: (arg0: any) => void; goBack: () => void; }; }) => {
    const [firstname, setfirstname] = useState<string>("");
    const [showfirstnameerr, setshowfirstnameerr] = useState<boolean>(false);
    const [lastname, setlastname] = useState<string>("");
    const [showlastnameerr, setshowlastnameerr] = useState<boolean>(false);
    const [age, setage] = useState<string>("");
    const [showageerr, setageerr] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onChangFirstNameText = (input: React.SetStateAction<string>) => {
        setfirstname(input);
        setageerr(false);
        setshowlastnameerr(false);
    };

    const onChangLastNameText = (input: React.SetStateAction<string>) => {
        setlastname(input);
        setshowfirstnameerr(false);
        setageerr(false);
    };

    const onChangAgeText = (input: React.SetStateAction<string>) => {
        setage(input);
        setshowfirstnameerr(false);
        setshowlastnameerr(false);
    };

    const onLoginPress = () => {
        let nameRegrex = NAME_REGREX;
        if (!nameRegrex.test(firstname) && !nameRegrex.test(lastname)) {
            setshowfirstnameerr(false);
            setshowlastnameerr(false);
            return false;
        } else {
            if (!nameRegrex.test(firstname)) {
                setshowlastnameerr(false);
                setshowfirstnameerr(true);
                return false;
            } else if (!nameRegrex.test(lastname)) {
                setshowlastnameerr(true);
                setshowfirstnameerr(false);
                return false;
            } else {
                setshowfirstnameerr(false);
                setshowlastnameerr(false);
                setIsLoading(true);
                createFriend();
            }
        }
    }

    const createFriend = () => {
        props.navigation.goBack();
    }

    const renderErrorMessage = (errorMessage: string) => (
        <Text style={[styles.inputTitle, styles.fieldError]}>{errorMessage}</Text>
    );

    const RenderFormFields = (label: string, placeholder: string, onChangeText: (input: string) => void, showIcon: boolean, value: string, secureTextEntry: boolean, fieldStyles: any, maxLength?: number, keyboardType?: string) => (
        <>
            <View style={styles.passwordText}><Text style={styles.inputTitle}>{label}</Text></View>
            <TextInput
                style={fieldStyles}
                inputStyle={styles.inputStyle}
                labelStyle={styles.labelStyle}
                placeholderStyle={styles.placeholderStyle}
                textErrorStyle={styles.textErrorStyle}
                placeholder={placeholder}
                placeholderTextColor="#55585B"
                showIcon={showIcon}
                onChangeText={onChangeText}
                value={value}
                autoCorrect={false}
                autoCapitalize='none'
                secureTextEntry={secureTextEntry}
                maxLength={maxLength}
                keyboardType={keyboardType}
            />
        </>
    );

    const renderButtons = () => (
        <View style={styles.loginBtnContainer}>
            <TouchableOpacity onPress={() => onLoginPress()}
                style={{ ...styles.button, backgroundColor: firstname && lastname && age ? '#F39118' : '#AFAFAF' }}
                disabled={firstname && lastname && age ? false : true}
            >
                <Text style={styles.text}>{STRING_CONSTANTS.LOGIN_SCREEN.LOG_IN_BUTTON_TITLE}</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: '#20586a' }}>
            <Header
                showBackArrow={true}
                onPressBack={() => props.navigation.goBack()}
                showScreenName={true}
                screenName={"Add new Friend"}
                headerContainer={{ flex: 0.08 }}
            />

            <View style={{ paddingTop: customScale(20), paddingHorizontal: customScale(20), flex: 1 }}>
                {RenderFormFields(STRING_CONSTANTS.LOGIN_SCREEN.FNAME_INPUT_LABEL, STRING_CONSTANTS.LOGIN_SCREEN.FNAME_INPUT_PLACEHOLDER, onChangFirstNameText, false, firstname, false, (showfirstnameerr ? styles.inputError : styles.input), 50, "name-phone-pad")}

                {showfirstnameerr ? renderErrorMessage(STRING_CONSTANTS.LOGIN_SCREEN.FNAME_INPUT_ERROR_MESSAGE) : null}


                {RenderFormFields(STRING_CONSTANTS.LOGIN_SCREEN.LNAME_INPUT_LABEL, STRING_CONSTANTS.LOGIN_SCREEN.LNAME_INPUT_PLACEHOLDER, onChangLastNameText, false, lastname, false, (showlastnameerr ? styles.inputError : styles.input), 50, "name-phone-pad")}

                {showlastnameerr ? renderErrorMessage(STRING_CONSTANTS.LOGIN_SCREEN.LNAME_INPUT_ERROR_MESSAGE) : null}

                {RenderFormFields(STRING_CONSTANTS.LOGIN_SCREEN.AGE_INPUT_LABEL, STRING_CONSTANTS.LOGIN_SCREEN.AGE_INPUT_PLACEHOLDER, onChangAgeText, false, age, false, (showageerr ? styles.inputError : styles.input), 3, "phone-pad")}

                {showageerr ? renderErrorMessage(STRING_CONSTANTS.LOGIN_SCREEN.AGE_INPUT_ERROR_MESSAGE) : null}
            </View>

            {renderButtons()}

        </View>
    )
};

export default AddFriendScreen;