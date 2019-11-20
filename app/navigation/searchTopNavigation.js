
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import IGTV from '../container/igtv';
import Shop from '../container/shop';
import Food from '../container/food';
import Art from '../container/art';
import Travel from '../container/travel';

import Constant from '../helper/themeHelper';
const AppNavigator = createMaterialTopTabNavigator(
    {
        IGTV,
        Shop,
        Food,
        Art,
        Travel,
    },
    {
        tabBarOptions: {
            //  activeTintColor: 'white',
            //showIcon: true,
            showLabel:true,
            style:{backgroundColor:'white'},
            activeTintColor: Constant.color.twitter,
            inactiveTintColor:Constant.color.blackColor
        },
    }
);

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;