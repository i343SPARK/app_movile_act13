import {SafeAreaView} from "react-native";
import ClockTopLogo from "./Clock/ClockTopLogo";
import MidlePrice from "./BuyPrice/MidlePrice";

export default function BuyPrice(){
    return(
        <SafeAreaView style={{backgroundColor:"#1B1B1B"}}>
            <ClockTopLogo/>
            <MidlePrice/>
        </SafeAreaView>
    )
}