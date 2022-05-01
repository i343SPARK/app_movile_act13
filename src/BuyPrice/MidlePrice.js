import {View, Text, StyleSheet, Button, Alert, Pressable} from "react-native";

export default function MidlePrice(){
    return(
        <View style = {styles.buy_container}>
            <Text style={styles.text_price}>Unlocke premium and have the <Text style={styles.text_orange}>100%</Text> functions</Text>
            <Pressable
                style={styles.button_buy}
                onPressOut={()=>Alert.alert("Upps", "there was a problem with you purchase, try again")}
            >
                <Text style={styles.text_button}>Buy now</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buy_container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#2E2E2E"
    },
    text_price:{
        color: "#fff",
        fontSize: 43,
        fontWeight: "bold",
        textAlign: "center",
        width: "91%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: 70
    },
    text_orange:{
        color: "#D99002"
    },
    button_buy:{
        backgroundColor: "#D99002",
        width: "80%",
        height: 70,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 14,
        marginTop: 70

    },
    text_button:{
        color: "white",
        textAlign: "center",
        top: "10%",
        fontWeight: "bold",
        fontSize: 40
    }
})