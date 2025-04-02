import React, {useState} from "react";
import {View, Text,TextInput,TouchableOpacity,StyleSheet} from "react-native";

export default function RegisterScreen({onClose}:any){
    return (
        <View>
            <Text>Sign up</Text>
            <TouchableOpacity onPress={onClose}>
                <Text>Go to Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};