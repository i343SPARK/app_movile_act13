import {View, Text, Image, StyleSheet} from "react-native";

export default function ClockMidle(){
    return(
        <View style={styles.midle_container}>
            <View style={styles.clock_container}>

            </View>
            <View style={styles.news_container}>
                <Text style={styles.text_news}>Have <Text style={{color:"#D99002"}}>news</Text></Text>
                <Image source={require('../img/news1.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    midle_container:{
        width: "100%",
        height: "auto",
        backgroundColor: "#2E2E2E"
    },
    clock_container:{
        width: 349,
        height: 162,
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: 20,
        marginTop:50,
        backgroundColor: "#3A3A3A"
    },
    news_container:{
        width: 349,
        height: 297,
        marginRight: "auto",
        marginLeft: "auto",
        borderRadius: 20,
        marginTop:28,
        backgroundColor: "#3A3A3A"
    },
    text_news:{
        fontSize: 38,
        color:"white",
        marginRight: "auto",
        marginLeft: "auto",
    }
})