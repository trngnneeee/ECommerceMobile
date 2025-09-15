import { Image, View, Text } from "react-native"
import { HeartButton } from "../../components/HeartButton/HeartButton"

export const ProductItem = () => {
  const size = 20;

  return (
    <>
      <View className="w-[170px] relative">
        <View className="w-[170px] h-[138px] overflow-hidden rounded-[24px]">
          <Image
            source={require("../../assets/images/demoProduct.jpg")}
            className="w-full h-full object-cover"
          />
        </View>
        <View className="mt-[8px] flex flex-row gap-[8px]">
          <View className="flex-row items-center">
            <View
              className="rounded-full border-2 border-blue-500"
              style={{ width: size, height: size, backgroundColor: "#111827", marginRight: -size / 3 }}
            />
            <View
              className="rounded-full"
              style={{ width: size, height: size, backgroundColor: "#00E676", marginRight: -size / 3 }}
            />
            <View
              className="rounded-full"
              style={{ width: size, height: size, backgroundColor: "#1DE9B6" }}
            />
          </View>
          <View className="">
            <Text className="font-jakarta text-[10px] underline">All 5 Colors</Text>
          </View>
        </View>
        <View className="mt-[8px]">
          <View className="w-full">
            <Text
              className="font-jakarta-medium text-[14px]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Nike air jordan retro fashion
            </Text>
            <Text className="font-jakarta-medium text-[14px]">$126.00</Text>
            <Text className="font-jakarta text-[10px] line-through">$186.00</Text>
          </View>
        </View>
        <HeartButton/>
      </View>
    </>
  );
}