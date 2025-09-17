import { CustomHeader } from "@/components/Header/CustomHeader";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SubCategories() {
  const tmpAPI = "https://fakestoreapi.com/products";

  return (
    <>
      <SafeAreaView>
        <CustomHeader
          title={"Categories"}
        />
        <ScrollView className="p-[16px]">
          <Text></Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}