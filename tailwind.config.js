/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "jakarta": "PlusJakartaSans_400Regular",
        "jakarta-bold": "PlusJakartaSans_700Bold",
        "jakarta-semibold": "PlusJakartaSans_600SemiBold",
        "jakarta-medium": "PlusJakartaSans_500Medium",
      },
      colors: {
        "main": '#21D4B4'
      }
    },
  },
  plugins: [],
}