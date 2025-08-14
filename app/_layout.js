import { Stack } from "expo-router";

export default function Layout(){
    return(
        <Stack
              screenOptions={{
                headerStyle: { backgroundColor: "#1E90FF"},
                headerTintColor: "#fff",
                headerTintleStyle: { fontWeight: "bold"},
              }}
        />
    );
}