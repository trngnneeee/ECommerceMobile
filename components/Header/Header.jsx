import { View, Image, Text } from "react-native";
import Feather from '@expo/vector-icons/Feather';

export function Header(){
  return (
    <>
      <View className="flex flex-row justify-between py-[10px] px-[16px] border-b-[1px] border-b-[#ddd]">
        <Image
          source={require("../../assets/images/quickmart.png")}
        />
        <View className="flex flex-row items-center gap-[12px]">
            <Feather name="search" size={30} color="black" />
            <View className="w-[32px] h-[32px] overflow-hidden rounded-[8px]">
              <Image
                source={require("../../assets/images/avatar.jpg")}
                className="w-full h-full"
              />
            </View>
        </View>
      </View>
    </>
  );
}