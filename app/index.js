import { View, Text, Button, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Home() {
    return (
        <View style={StyleSheet.container}>
            <Text style={StyleSheet.titulo}>🏠Página Inicial</Text>
            <Link href="/sobre" asChild>
            <Button title="Ir para Sobre➡️"/>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    titulo: { fontSize: 24, fontWeight: "bold" },
});
