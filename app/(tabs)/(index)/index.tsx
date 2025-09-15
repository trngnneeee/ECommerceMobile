import { ScrollView } from "react-native";
import { Section1 } from "./Section1"
import { Section2 } from "./Section2"
import { Section3 } from "./Section3"

export default function Index() {
  return (
    <>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Section1 />
        <Section2 />
        <Section3 />
      </ScrollView>
    </>
  );
}
