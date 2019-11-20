import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import YOURLIST from '../container/Settingfiles/Privacyfiles/closefriendnavigaionpages/yourlist';
import SUGGESTIONS from '../container/Settingfiles/Privacyfiles/closefriendnavigaionpages/suggestions';
import Constant from '../helper/themeHelper';

const AppNavigator = createMaterialTopTabNavigator(
    {
        YOURLIST,
        SUGGESTIONS,
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