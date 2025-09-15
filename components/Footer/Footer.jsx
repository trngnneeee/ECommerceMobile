import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from '@expo/vector-icons/Feather';
import { Link } from "expo-router";
import { View, Text } from "react-native";
import { usePathname } from "expo-router";

export function Footer() {
  const pathName = usePathname();

  const dataFooter = [
    {
      Icon: FontAwesome,
      title: "Home",
      name: "home",
      link: "/"
    },
    {
      Icon: MaterialIcons,
      title: "Categories",
      name: "category",
      link: "/categories"
    },
    {
      Icon: Feather,
      title: "Cart",
      name: "shopping-cart",
      link: "/cart"
    },
    {
      Icon: FontAwesome5,
      title: "Wishlist",
      name: "heart",
      link: "/wishlist"
    },
    {
      Icon: Feather,
      title: "Profile",
      name: "user",
      link: "/profile"
    },
  ]

  return (
    <View className="absolute bottom-0 left-0 right-0 bg-white p-4 flex flex-row justify-between">
      {dataFooter.map((item, index) => {
        const isActive = pathName === item.link;
        return (
          <Link key={index} href={item.link}>
            <View className="flex flex-col items-center justify-center">
              <item.Icon name={item.name} size={24} color={isActive ? "#21D4B4" : "black"} />
              <Text 
                className={`text-[12px] ${isActive ? "font-jakarta-semibold" : "font-jakarta"
                }`}>
                  {item.title}
                </Text>
            </View>
          </Link>
        )
      })}
    </View>
  );
}
