// App.jsx
import { StatusBar } from "expo-status-bar";
import { FlatList, Text, View } from "react-native";
// import { wordDb } from "../db/BengaliDictionary";
import { e2bJsonData } from "../db/E2Bdatabase";

export default function Page() {
  const wordData = e2bJsonData;
  // console.log("🚀 ~ file: index.js:9 ~ Page ~ wordData:", wordData)
  return (
    <View className="flex-1 p-4 bg-gray-100">
      <Text className="text-2xl">E2B Dictionary</Text>

        <FlatList
          data={wordData}
          renderItem={({ item }) => (
            <View className="px-2 py-4 bg-white mt-4 flex-row justify-between">
              <Text className="capitalize">{item.en}</Text>
              <Text>{item.bn}</Text>
            </View>
          )}
        />
      <StatusBar style="auto" />
    </View>
  );
}
