import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import ClockTopLogo from "./Clock/ClockTopLogo";
import ClockMidle from "./Clock/ClockMidle";

export default function Clock() {
    return (
        <SafeAreaView style={{backgroundColor:"#1B1B1B"}}>
            <ClockTopLogo/>
            <ClockMidle/>
        </SafeAreaView>
    )
}