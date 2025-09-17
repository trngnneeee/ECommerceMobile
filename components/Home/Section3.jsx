import { Link } from "expo-router";
import { Title } from "../Title/Title";
import { ProductItem } from "../ProductItem/ProductItem";
import { Text, View, Image } from "react-native"
import { useEffect, useState } from "react";

export const Section3 = () => {
  const tmpAPI = "https://fakestoreapi.com/products";
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchData = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let tmp = [];
          for (const item of data)
          {
            if (tmp.length > 5) break;
            tmp.push({
              title: item.title, 
              image: item.image,
              price: item.price,
              rate: item.rating.rate
            })
          }
          setProductList(tmp);
        })
    }
    fetchData(tmpAPI);
  }, [])

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
      <View className="flex flex-row flex-wrap justify-between mt-[12px] gap-[15px]">
        {productList.length > 0 && productList.map((item, index) => (
          <ProductItem
            key={index}
            item={item}
          />
        ))}
      </View>
    </>
  );
}