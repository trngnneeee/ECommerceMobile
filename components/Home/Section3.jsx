import { Link } from "expo-router";
import { Title } from "../Title/Title";
import { ProductItem } from "../ProductItem/ProductItem";
import { Text, View, Image } from "react-native"

export const Section3 = () => {

  return (
    <>
      <View className="flex flex-row justify-between items-center mt-[24px]">
        <Title
          title={"Latest Products"}
        />
        <Link href="/categories">
          <Text className="font-jakarta-semibold text-[10px] text-main">SEE ALL</Text>
        </Link>
      </View>
      <View className="flex flex-row flex-wrap justify-between mt-[12px] gap-[10px]">
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
        <ProductItem/>
      </View>
        <ProductItem/>
    </>
  );
}