import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from "expo-router";
import { Text } from "react-native";

export default function TabsLayout() {
  const TabLabel = ({ focused, title }: any) => {
    return (
      <Text
        className={"text-[12px] " + (focused ? "font-jakarta-semibold" : "font-jakarta")}
      >
        {title}
      </Text>
    )
  }

  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#21D4B4",
          tabBarInactiveTintColor: "grey",
          tabBarItemStyle: {
            width: '100%',
            height: "100%",
            justifyContent: "center",
            alignItems: "center"
          },
          tabBarStyle: {
            borderTopColor: "grey"
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <FontAwesome name={"home"} size={24} color={color} />
              </>
            ),
            tabBarLabel: ({ focused }) => (
              <TabLabel
                focused={focused}
                title="Home"
              />
            )
          }}

        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <MaterialIcons name={"category"} size={24} color={color} />
              </>
            ),
            tabBarLabel: ( {focused} ) => (
              <TabLabel
                focused={focused}
                title="Categories"
              />
            )
          }}
        />
        <Tabs.Screen
          name="cart"
          options={{
            title: "Cart",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <FontAwesome name={"shopping-cart"} size={24} color={color} />
              </>
            ),
            tabBarLabel: ( {focused} ) => (
              <TabLabel
                focused={focused}
                title="Cart"
              />
            )
          }}
        />
        <Tabs.Screen
          name="wishlist"
          options={{
            title: "Wishlist",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <FontAwesome name={"heart"} size={24} color={color} />
              </>
            ),
            tabBarLabel: ( {focused} ) => (
              <TabLabel
                focused={focused}
                title="Cart"
              />
            )
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ focused, color }) => (
              <>
                <FontAwesome name={"user"} size={24} color={color} />
              </>
            ),
            tabBarLabel: ( {focused} ) => (
              <TabLabel
                focused={focused}
                title="Profile"
              />
            )
          }}
        />
      </Tabs>
    </>
  );
}
