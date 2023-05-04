import { CommonActions } from '@react-navigation/native';

let navigator: { dispatch: (arg0: CommonActions.Action) => void; };

function setTopLevelNavigator(navigatorRef: any) {
  navigator = navigatorRef;
}

function navigate(routeName: string, routeParams?: any ) {
    navigator.dispatch(
        CommonActions.navigate({
          name: routeName,
          params: routeParams,
        })
    );
}

export default { navigate, setTopLevelNavigator };