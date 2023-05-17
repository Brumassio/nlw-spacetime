import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-950">
      <Text className="text-5xl text-gray-50">:O</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}
