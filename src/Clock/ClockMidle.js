import {View, Text, Image, StyleSheet} from "react-native";

export default function ClockMidle(){
    return(
        <View style={styles.midle_container}>
            <View style={styles.clock_container}>
                <Text style={styles.clock_info}>10:00</Text>
            </View>
            <View style={styles.news_container}>
                <Text style={styles.text_news}>Have <Text style={{color:"#D99002"}}>news</Text></Text>
                <Image source={require('../img/news1.png')} style={styles.news_img1}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    midle_container:{
        width: "100%",
        height: "100%",
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
    clock_info:{
        width: "70%",
        marginLeft: "auto",
        marginRight: "auto",
        paddingTop: 20,
        color: "#fff",
        fontSize: 100

    },
    news_container:{
        width: 349,
        height: 310,
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
        marginTop: 20,
        fontWeight: "bold"
    },
    news_img1:{
        marginTop: 20,
        marginRight: "auto",
        marginLeft: "auto",
    }
})