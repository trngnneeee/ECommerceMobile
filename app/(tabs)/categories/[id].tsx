import { CustomHeader } from "@/components/Header/CustomHeader";
import { ProductItem } from "@/components/ProductItem/ProductItem";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SubCategories() {
  const tmpAPI = "https://fakestoreapi.com/products";
  const productID = useLocalSearchParams().id;
  const [productList, setProductList] = useState<any[]>([]);

  useEffect(() => {
    const fetchAPI = (url: string) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let tmp = [];
          for (const item of data) {
            if (item.category == productID) {
              tmp.push({
                title: item.title,
                image: item.image,
                price: item.price,
                rate: item.rating.rate
              })
            }
          }
          setProductList(tmp);
        })
    }

    fetchAPI(tmpAPI);
  }, [])

  return (
    <>
      <SafeAreaView>
        <CustomHeader
          title={"Categories"}
        />
        <ScrollView className="p-[16px]">
          <View className="flex flex-row flex-wrap justify-between mt-[12px] gap-[15px]">
            {productList.length > 0 && productList.map((item, index) => (
              <ProductItem
                key={index}
                item={item}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}