import { Link, useRouter } from "expo-router";
import { Title } from "../Title/Title";
import { Text, View, Image, TouchableOpacity } from "react-native"
import { useEffect, useState } from "react";

export const Section2 = () => {
  const tmpAPI = "https://fakestoreapi.com/products";

  const [categoryList, setCategoryList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = (url) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let tmp = [];
          for (const item of data) {
            if (!tmp.includes(item.category)) tmp.push(item.category);
          }
          setCategoryList(tmp);
        })
    }

    fetchData(tmpAPI);
  }, [])

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
        {categoryList.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            className="py-[10px] flex flex-col justify-center items-center border-[1px] border-[#d2cfcf] rounded-[12px]"
            onPress={() => {
              router.push({
                pathname: `/categories/${item}`
              })
            }}
          >
            <Text className="w-[60px] mx-[8px] text-center text-[10px] font-jakarta-semibold">{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}