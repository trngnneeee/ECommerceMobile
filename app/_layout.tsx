import { Stack } from "expo-router";
import { useFonts } from "@expo-google-fonts/plus-jakarta-sans/useFonts"
import "./global.css"

import {
  PlusJakartaSans_700Bold,
  PlusJakartaSans_400Regular,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_500Medium
} from '@expo-google-fonts/plus-jakarta-sans';

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    PlusJakartaSans_700Bold,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_500Medium
  })

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
