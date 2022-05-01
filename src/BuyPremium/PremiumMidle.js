import {Image, StyleSheet, Text, View} from "react-native";

export default function PremiumMidle(){
    return(
        <View style={styles.midle_container}>
            <Text style={styles.text_general}><Text style={styles.text_orange}>Upgrade</Text> your app to unlocke this <Text style={styles.text_orange}>function</Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    midle_container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#2E2E2E"
    },
    text_general:{
        width: "80%",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 100,
        color: "white",
        fontSize: 55,
        fontWeight: "bold",
        textAlign: "center"
    },
    text_orange:{
        color: "#D99002"
    }
})