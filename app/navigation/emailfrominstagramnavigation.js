import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Security from '../container/Settingfiles/Securityfiles/emailfrominstagramnavigationpages/security'
import Other from '../container/Settingfiles/Securityfiles/emailfrominstagramnavigationpages/other';
import Constant from '../helper/themeHelper';

const AppNavigator = createMaterialTopTabNavigator(
    {
        Security,
        Other
    },
    {
        tabBarOptions: {
            //  activeTintColor: 'white',
            //showIcon: true,
            showLabel:true,
            style:{backgroundColor:'white'},
            activeTintColor: Constant.color.blackColor,
            inactiveTintColor:Constant.color.lightGray
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;