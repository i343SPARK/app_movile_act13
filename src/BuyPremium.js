import {View, SafeAreaView} from "react-native";
import ClockTopLogo from "./Clock/ClockTopLogo";
import PremiumMidle from "./BuyPremium/PremiumMidle";

export default function BuyPremium(){
    return(
        <SafeAreaView style={{backgroundColor:"#1B1B1B"}}>
            <ClockTopLogo/>
            <PremiumMidle/>
        </SafeAreaView>
    )
}