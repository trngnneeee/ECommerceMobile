import { View } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export const HeartButton = () => {
  return (
    <>
      <View className="bg-black rounded-[50%] p-[6px] w-[24px] h-[24px] absolute top-[6px] right-[6px]">
        <FontAwesome5 name="heart" size={12} color="white" />
      </View>
    </>
  );
}