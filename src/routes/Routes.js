import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../components/HomeScreen/HomeScreen';
import Header from '../components/Header';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faSearch, faPlusSquare, faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons'

const HomeStackScreen = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <HomeStackScreen.Navigator>
        <HomeStackScreen.Screen 
          name="HomeScreen" 
          component={HomeScreen} 
          options={{ headerTitle: () => <Header /> }}
        />
      </HomeStackScreen.Navigator>
  );
}

function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: () => {
            if (route.name === 'HomeScreen') {
              return <FontAwesomeIcon icon={faHome} size={25} />;
            }if (route.name === 'Search') {
              return <FontAwesomeIcon icon={faSearch} size={20} />;
            }if (route.name === 'Upload') {
              return <FontAwesomeIcon icon={faPlusSquare} size={25} />;
            }if (route.name === 'Heart') {
              return <FontAwesomeIcon icon={faHeart} size={22} />;
            } else if (route.name === 'Profile') {
              return <FontAwesomeIcon icon={faUserCircle} size={25} />;
            }            
          },
        })}
      >
        <Tab.Screen 
          name="HomeScreen" 
          component={HomeStack} 
          options={{ headerTitle: () => <Header /> }}
        />
        <Tab.Screen name="Search" component={HomeStack} />
        <Tab.Screen name="Upload" component={HomeStack} />
        <Tab.Screen name="Heart" component={HomeStack} />
        <Tab.Screen name="Profile" component={HomeStack} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default Routes;