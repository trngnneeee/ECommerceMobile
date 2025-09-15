import { Text } from "react-native"

export const Title = (props) => {
  const { title, className } = props;
  
  return (
    <>
      <Text className={`text-black font-jakarta-bold text-[18px] ` + className}>{title}</Text>
    </>
  );
}