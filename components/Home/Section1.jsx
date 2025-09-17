import { Image, View, Text } from "react-native"

export const Section1 = () => {
  return (
    <View className="mt-[24px]">
      <View className="flex flex-row justify-center relative">
        <Image
          source={require("./../../assets/images/Rectangle 6.png")}
        />
        <View className="absolute left-[45px] top-1/2 -translate-y-1/2">
          <View className="bg-black p-[6px] rounded-[6px] mb-[6px]">
            <Text className="text-white text-[10px] font-jakarta-semibold">30% OFF</Text>
          </View>
        </View>
        <View className="absolute left-[45px] top-[58%]">
          <Text className="text-white text-[12px] font-jakarta">On Headphones</Text>
          <Text className="text-white text-[24px] font-jakarta-bold">Exclusive Sales</Text>
        </View>
      </View>
    </View>
  );
};