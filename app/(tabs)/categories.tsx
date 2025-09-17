import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "../../components/Header/CustomHeader"
import { Link } from "expo-router";

export default function Categories() {
  const imageData = {
    Electronics: require("../../assets/images/electronics.png"),
    Fashion: require("../../assets/images/fashion.png"),
    Furniture: require("../../assets/images/furniture.png"),
    Industrial: require("../../assets/images/industrial.png"),
    HomeDecor: require("../../assets/images/home decor.png"),
    Electronics2: require("../../assets/images/electronic2.png"),
    Health: require("../../assets/images/health.png"),
    RealState: require("../../assets/images/real state.png"),
    Fabrication: require("../../assets/images/fabrication.png"),
    Electrical: require("../../assets/images/electrical.png"),
  }

  const data = [
    { id: "1", name: "Electronics", image: imageData.Electronics },
    { id: "2", name: "Fashion", image: imageData.Fashion },
    { id: "3", name: "Furniture", image: imageData.Furniture },
    { id: "4", name: "Industrial", image: imageData.Industrial },
    { id: "5", name: "Home Decor", image: imageData.HomeDecor },
    { id: "6", name: "Electronics", image: imageData.Electronics2 },
    { id: "7", name: "Health", image: imageData.Health },
    { id: "8", name: "Construction & Real State", image: imageData.RealState },
    { id: "9", name: "Fabrication Service", image: imageData.Fabrication },
    { id: "10", name: "Electrical Equipment", image: imageData.Electrical },
  ];

  return (
    <>
      <SafeAreaView>
        <CustomHeader
          link="/"
          title="Home"
        />
        <ScrollView className="p-[16px]">
          <View className="flex flex-row flex-wrap justify-between gap-[10px]">
            {data.map((item, index) => (
              <View key={index} className="w-[48%] border-[1px] border-[#7f7f7f] flex flex-col justify-center items-center py-[23px] rounded-[16px]">
                <Image
                  source={item.image}
                  className="mb-[10px]"
                />
                <Text className="text-[12px] font-jakarta-semibold">{item.name}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}