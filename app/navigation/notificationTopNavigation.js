import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import Following from '../container/following';
import You from '../container/you';
import Constant from '../helper/themeHelper';

const AppNavigator = createMaterialTopTabNavigator(
    {
        Following,
        You
    },
    {
        tabBarOptions: {
            //  activeTintColor: 'white',
            //showIcon: true,
            showLabel:true,
            style:{backgroundColor:'white'},
            activeTintColor: "grey",
            inactiveTintColor:Constant.color.blackColor
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;