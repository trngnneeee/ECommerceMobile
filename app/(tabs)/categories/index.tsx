import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomHeader } from "../../../components/Header/CustomHeader"
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";

export default function Categories() {
  const tmpAPI = "https://fakestoreapi.com/products";

  const [categoryList, setCategoryList] = useState<string[]>([]);
  useEffect(() => {
    const fetchData = (url: string) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          let tmp: string[] = [];
          for (const item of data)
          { 
            if (!tmp.includes(item.category)) tmp.push(item.category);
          }
          setCategoryList(tmp);
        })
    }

    fetchData(tmpAPI);
  }, [])

  const router = useRouter();

  return (
    <>
      <SafeAreaView>
        <CustomHeader
          title="Home"
        />
        <ScrollView className="p-[16px]">
          <View className="flex flex-row flex-wrap justify-between gap-[10px]">
            {categoryList.length > 0 && categoryList.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  router.push({
                    pathname: "/categories/[id]",
                    params: { id: item }
                  });
                }}
                className="w-[48%] border-[1px] border-[#7f7f7f] flex flex-col justify-center items-center py-[23px] rounded-[16px]"
              >
                  <Text className="text-[12px] font-jakarta-semibold">{item}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}