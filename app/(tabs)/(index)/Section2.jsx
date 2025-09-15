import { Link } from "expo-router";
import { Title } from "../../../components/Title/Title";
import { Text, View, Image } from "react-native"

export const Section2 = () => {
  const categoryImage = {
    electronics: require("../../../assets/images/electronics.png"),
    fashion: require("../../../assets/images/fashion.png"),
    furniture: require("../../../assets/images/furniture.png"),
    industrial: require("../../../assets/images/industrial.png"),
  }
  
  const categoryData = [
    {
      image: categoryImage.electronics,
      title: "Electronics"
    },
    {
      image: categoryImage.fashion,
      title: "Fashion"
    },
    {
      image: categoryImage.furniture,
      title: "Furniture"
    },
    {
      image: categoryImage.industrial,
      title: "Industrial"
    },
  ]

  return (
    <>
      <View className="flex flex-row justify-between items-center mt-[24px]">
        <Title
          title={"Categories"}
        />
        <Link href="/categories">
          <Text className="font-jakarta-semibold text-[10px] text-main">SEE ALL</Text>
        </Link>
      </View>
      <View className="flex flex-row justify-between mt-[12px]">
        {categoryData.map((item, index) => (
          <View key={index} className="py-[10px] flex flex-col justify-center items-center border-[1px] border-[#d2cfcf] rounded-[12px]">
            <Image
              source={item.image}
            />
            <Text className="w-[60px] mx-[8px] text-center text-[10px] font-jakarta-semibold">{item.title}</Text>
          </View>
        ))}
      </View>
    </>
  );
}