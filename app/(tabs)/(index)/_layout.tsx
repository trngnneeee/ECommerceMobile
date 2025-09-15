import { Stack } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../../components/Header/Header";
import { Footer } from "../../../components/Footer/Footer";

export default function TabsLayout() {
  return (
    <>
      <SafeAreaView className="flex-1 pb-[50px]">
        <Header />

        <View style={{ flex: 1 }} className="p-[16px]">
          <Stack screenOptions={{ headerShown: false }}/>
        </View>

        <Footer />
      </SafeAreaView>
    </>
  );
}
