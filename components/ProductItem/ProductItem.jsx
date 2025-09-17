import { Image, View, Text } from "react-native"
import { HeartButton } from "../../components/HeartButton/HeartButton"

export const ProductItem = ({ key, item }) => {
  const size = 20;

  return (
    <>
      <View className="w-[45%] relative" key={key}>
        <View className="h-[150px] overflow-hidden rounded-[24px]">
          <Image
            source={{
              uri: item.image
            }}
            className="w-full h-full object-cover"
          />
        </View>
        {/* <View className="mt-[8px] flex flex-row gap-[8px]">
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
        </View> */}
        <View className="mt-[8px]">
          <View className="w-full">
            <Text
              className="font-jakarta-medium text-[14px]"
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.title}
            </Text>
            <View className="flex flex-row justify-between items-center">
              <View>
                <Text className="font-jakarta-medium text-[14px]">${item.price}</Text>
                <Text className="font-jakarta text-[10px] line-through">${(parseFloat(item.price) * 1.6).toFixed(2)}</Text>
              </View>
              <View>
                <Text className="font-jakarta text-[12px]">Rate: <Text className="font-jakarta-semibold">{item.rate}</Text></Text>
              </View>
            </View>
          </View>
        </View>
        <HeartButton />
      </View>
    </>
  );
}