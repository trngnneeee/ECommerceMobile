import { ScrollView, Text, View } from "react-native";
import { Header } from "../../components/Header/Header"
import { Section1 } from "../../components/Home/Section1";
import { Section2 } from "../../components/Home/Section2";
import { Section3 } from "../../components/Home/Section3";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <>
      <SafeAreaView>
        <Header />
        <ScrollView className="px-[16px]">
          <Section1 />
          <Section2 />
          <Section3 />
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
