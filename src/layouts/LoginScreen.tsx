import { View, Text, TextInput, } from "react-native";

export default function LoginScreen() {
    return (

        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text> Login.</Text>
            <Text> E-mail:</Text>
            <TextInput placeholder="Ingresa el dato: "></TextInput>
            <Text>Contraseña:</Text>
            <TextInput   placeholder="Ingresa la contraseña: ">
            </TextInput>
        </View>
    );
}