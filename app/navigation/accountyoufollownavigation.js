import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Followers from '../container/Settingfiles/Privacyfiles/accountyoufollownavigationpages/followers';
import Following from '../container/Settingfiles/Privacyfiles/accountyoufollownavigationpages/following';
import Constant from '../helper/themeHelper';

const AppNavigator = createMaterialTopTabNavigator(
    {
        Followers,
        Following
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