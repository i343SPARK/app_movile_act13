import {View, Image, StyleSheet} from "react-native";

export default function ClockTopLogo(){
    return(
        <View style={styles.logoTypeContainer}>
            <Image source={require('../img/Logo.png')} style={styles.logoType} />
        </View>
    )
}

const styles = StyleSheet.create({
    logoTypeContainer:{
        width: "100%",
        backgroundColor: "#1B1B1B",
    },
    logoType: {
        marginLeft:"auto",
        marginRight:"auto"
    }
})