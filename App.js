import { StyleSheet, Image } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BuyPremium, BuyPrice, Clock} from "./src/Index";
import {useState} from "react";


export default function App() {
    const Tab = createBottomTabNavigator()
    let [screen, setScreen] = useState(false)

  return (
    <NavigationContainer>
      <Tab.Navigator initialState={Clock}
                     screenOptions={{ headerShown: false,
                         tabBarStyle: { height: 100, paddingBottom:0, backgroundColor:"#1B1B1B"},
                         tabBarShowLabel: false }}
      >
          <Tab.Screen name={"Buy"} component={BuyPremium}
                      options={{tabBarIcon: ({focused}) => focused?renderChronometricOrange():renderChronometricGray()}}/>
          <Tab.Screen name={"Home"} component={Clock}
                      options={{tabBarIcon: ({focused}) => focused?renderClockOrange():renderClockGray()}}/>
          <Tab.Screen name={"Buy2"} component={BuyPremium}
                      options={{tabBarIcon: ({focused}) => focused?renderTempoOrange():renderTempoGray()}}/>
          <Tab.Screen name={"GetPremium"} component={BuyPrice}
                      options={{tabBarIcon: ({focused}) => focused?renderBuyerOrange():renderBuyerGray()}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function renderClockGray(){
    return(
        <Image source={require("./src/img/OrangeAlarmClock.png")}/>
    )
}

function renderChronometricGray(){
    return(
        <Image source={require("./src/img/GrayPocketWatch.png")}/>
    )
}

function renderTempoGray(){
    return(
        <Image source={require("./src/img/GrayTimeSpan.png")}/>
    )
}

function renderBuyerGray(){
    return(
        <Image source={require("./src/img/GrayPricing.png")}/>
    )
}

function renderClockOrange(){
    return(
        <Image source={require("./src/img/GrayAlarmClock.png")}/>
    )
}

function renderChronometricOrange(){
    return(
        <Image source={require("./src/img/OrangePocketWatch.png")}/>
    )
}

function renderTempoOrange(){
    return(
        <Image source={require("./src/img/OrangeTimeSpan.png")}/>
    )
}

function renderBuyerOrange(){
    return(
        <Image source={require("./src/img/OrangePricing.png")}/>
    )
}