import { Pressable, Text } from "react-native";

export function CustomButton({ onPress, title }){
  return (
    <>
      <Pressable
        onPress={onPress}
        className="bg-black px-4 py-[21px] rounded-lg"
      >
        <Text className="text-white text-center text-[14px] font-jakarta-semibold">{title}</Text>
      </Pressable>
    </>
  );
}