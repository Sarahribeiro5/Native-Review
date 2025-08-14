import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Sob() {
    return (
        <View style={styleSheet.container}>
            <Text style={styleSheet.titulo}>ℹ️Página Inicial</Text>
            <Link href="/" asChild>
            <Button title="⬅️Voltar para Sobre"/>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    titulo: { fontSize: 24, fontWeight: "bold" },
});