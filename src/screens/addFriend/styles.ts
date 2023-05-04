import { StyleSheet } from 'react-native';
import { customScale } from '../../utils/CustomScale';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: customScale(16),
  },
  appBg: {
    width: customScale(299.25),
    height: customScale(279.34),
    position: 'absolute',
    top: customScale(-18),
    left: customScale(-20)
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  inputsContainer: {
    flex: 0.45,
    justifyContent: 'flex-end',
    padding: customScale(10),
  },
  input: {
    height: customScale(48),
    paddingHorizontal: customScale(16),
    borderWidth: 1,
    borderColor: '#292E32',
    backgroundColor: '#1C1F24',
  },
  inputStyle: {
    fontFamily: 'Rubik',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: customScale(14),
    lineHeight: customScale(17.5),
    letterSpacing: customScale(0.39),
    color: '#fff'
  },
  inputError: {
    paddingHorizontal: customScale(17),
    height: customScale(48),
    borderWidth: 0.5,
    borderColor: 'red',
    backgroundColor: '#1C1F24'
  },
  labelStyle: {
    fontSize: customScale(14),
    position: 'absolute',
    top: customScale(-10),
    backgroundColor: '#000000',
    paddingHorizontal: customScale(4),
    marginLeft: customScale(-4)
  },
  placeholderStyle: { fontSize: customScale(16) },
  textErrorStyle: { fontSize: customScale(16) },
  button: {
    height: customScale(48),
    width: '90%',
    backgroundColor: '#F39118',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: customScale(10)
  },
  text: {
    color: '#fff',
    fontWeight: '700',
    fontSize: customScale(16),
    fontFamily: "Rubik-Bold",
  },
  inputTitle: {
    fontFamily: "Rubik-Regular",
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: customScale(14),
    lineHeight: customScale(17),
    color: '#FFFFFF'
  },
  troubleText: {
    fontFamily: "Rubik-Regular",
    color: '#F39118',
    fontSize: customScale(12),
    lineHeight: customScale(18),
    fontWeight: '400',
    letterSpacing: customScale(0.2)
  },
  troubleText2: {
    color: '#FFFFFF',
    fontSize: customScale(16),
    fontWeight: '700',
    lineHeight: customScale(24),
    fontFamily: 'Rubik-Bold'
  },
  contactText: {
    fontFamily: "Rubik-Bold",
    color: '#FFFFFF',
    fontSize: customScale(16),
    fontWeight: '400',
    lineHeight: customScale(24),
    textAlign: 'center',
    paddingRight: customScale(10)
  },
  loginButton: {
    height: customScale(50),
    margin: customScale(20)
  },
  sheet: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderTopLeftRadius: customScale(18),
    borderTopRightRadius: customScale(18)
  },
  passwordText: {
    paddingTop: customScale(16),
    paddingBottom: customScale(8)
  },
  loginBtnContainer: {
    flex: 0.13,
    alignItems: 'center',
  },
  closeBtn: {
    alignItems: 'flex-end',
    padding: customScale(16)
  },
  okButton: {
    height: customScale(50),
    margin: customScale(20)
  },

  timeCount: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  timeTxt: {
    color: 'white',
    marginVertical: 2,
    backgroundColor: 'transparent',
  },
  timeInnerCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitCont: {
    borderRadius: 5,
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  doubleDigitCont: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  digitTxt: {
    color: 'white',
    fontWeight: 'bold',
    fontVariant: ['tabular-nums']
  },
  separatorTxt: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: customScale(16),
    lineHeight: customScale(24),
    fontFamily: 'Rubik-Bold'
  },
  fieldError: {
    color: 'red',
    paddingVertical: customScale(8)
  },
  poweredByView: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: customScale(20)
  },
  poweredBy: {
    fontFamily: "Rubik-Light",
    color: '#8E8E8D',
    fontSize: customScale(12),
    fontWeight: '300',
    lineHeight: customScale(18),
    letterSpacing: customScale(0.2),
    textAlign: 'center',
  }
});