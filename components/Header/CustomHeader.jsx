import { Link } from "expo-router";
import { Text, View } from "react-native";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
export const CustomHeader = ({ link, title }) => {
  return (
    <>
      <View className="py-[10px] px-[16px] border-b-[1px] border-b-[#ddd]">
        <Link href={link}>
          <View className="flex flex-row gap-[6px] items-center">
            <FontAwesome6 name="arrow-left-long" size={24} color="black" />
            <Text className="font-jakarta-medium text-[14px] translate-y-[-2px]">{title}</Text>
          </View>
        </Link>
      </View>
    </>
  );
}