import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation';
import Main from '../container/main';
import Login from '../container/login';
import Splash from '../component/splash';
import Registration from '../container/registration';
import Forgetpass from '../container/forgetpassword';
import Settings from '../container/Settingfiles/settings';
import Privacy from '../container/Settingfiles/privacy';
import Security from '../container/Settingfiles/security';
import Accounts from '../container/Settingfiles/account';
import Help from '../container/Settingfiles/help';
import Search from '../container/search';
import Followinvitefriend from '../container/Settingfiles/followinvitefriends';
import Settingnotification from '../container/Settingfiles/settingnotification';
import Settingads from '../container/Settingfiles/settingsads';
import About from '../container/Settingfiles/about';
import Comments from '../container/Settingfiles/Privacyfiles/comments';
import Tags from '../container/Settingfiles/Privacyfiles/tags';
import Story from '../container/Settingfiles/Privacyfiles/story';
import Activitystatus from '../container/Settingfiles/Privacyfiles/activitystatus';
import Accountprivacy from '../container/Settingfiles/Privacyfiles/accountprivacy';
import Blockedaccount from '../container/Settingfiles/Privacyfiles/blockedaccount';
import Mutedaccount from '../container/Settingfiles/Privacyfiles/mutedaccount';
import Closedfriend from '../container/Settingfiles/Privacyfiles/closefriend';
import Accountyoufollow from '../container/Settingfiles/Privacyfiles/accountyoufollow';
import Password from '../container/Settingfiles/Securityfiles/password';
import Gettingstarted from '../container/Settingfiles/Securityfiles/Twofactorauthenticationfiles/gettingstarted';
import Twofactorauthentication from '../container/Settingfiles/Securityfiles/twofactorauthentication';
import Phonenumber from '../container/Settingfiles/Securityfiles/Twofactorauthenticationfiles/phonenumber';
import Emailfrominstagram from '../container/Settingfiles/Securityfiles/emailfrominstagram';
import Add from '../container/add';
import Notification from '../container/notification';
import User from '../container/userHome';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from  'react-native-vector-icons/AntDesign';

const TabNavigator = createBottomTabNavigator({
    Main,
    Search,
    Add,
    Notification,
    User,
},{
    defaultNavigationOptions: ({navigation}) => ({
        tabBarOptions:{showLabel:false,showIcon: true,
            tintColor: 'grey',
            activeTintColor: 'black'},
        tabBarIcon: ({focused, horizontal, tintColor}) => {
            const {routeName} = navigation.state;
            if (routeName === 'Main') {
                return (
                    <TouchableOpacity>
                        <Icon name="home" size={30} style={{padding: 5,color:tintColor}}/>
                    </TouchableOpacity>
                );
            } else if (routeName === 'Search'){
                return (
                    <TouchableOpacity>
                        <EvilIcon name="search" size={40} style={{padding: 4,color:tintColor}}/>
                    </TouchableOpacity>
                );
            }
            else if (routeName === 'Add'){
                return (
                    <TouchableOpacity>
                        <AntIcon name="plussquareo" size={37} style={{padding:4,color:tintColor}}/>
                    </TouchableOpacity>
                );
            }
            else if (routeName === 'Notification'){
                return (
                    <TouchableOpacity>
                        <EvilIcon name="heart" size={40} style={{padding:4,color:tintColor}}/>
                    </TouchableOpacity>
                );
            }
            else {
                return(
                    <TouchableOpacity>
                        <AntIcon name="user" size={37} style={{padding:4,color:tintColor}}/>
                    </TouchableOpacity>
                );
            }
        },
    }),
});
const AppNavigator = createStackNavigator({
    Splash,
    Login,
    Registration,
    Forgetpass,
    Settings,
    Privacy,
    Accounts,
    Security,
    Followinvitefriend,
    Settingnotification,
    Settingads,
    Help,
    About,
    Comments,
    Tags,
    Story,
    Activitystatus,
    Accountprivacy,
    Blockedaccount,
    Mutedaccount,
    Closedfriend,
    Accountyoufollow,
    Password,
    Twofactorauthentication,
    Gettingstarted,
    Phonenumber,
    Emailfrominstagram,
    TabNavigator,
},{
    headerMode:'none',
});

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
