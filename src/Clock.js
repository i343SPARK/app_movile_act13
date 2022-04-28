import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ClockTopLogo from "./Clock/ClockTopLogo";
import ClockMidle from "./Clock/ClockMidle";

export default function Clock() {
    return (
        <View>
            <ClockTopLogo/>
            <ClockMidle/>
        </View>
    )
}