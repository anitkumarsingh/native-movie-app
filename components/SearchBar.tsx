import { icons } from "@/constants/icons";
import { Image, TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View className="flex-row bg-dark-200 rounded-full items-center px-5 py-4">
      <Image
        source={icons.search}
        className="size-5"
        resizeMode="contain"
        tintColor="#ab8bff"
      />
      <TextInput
        onPress={() => {}}
        placeholder="Search"
        value=""
        onChange={() => {}}
        placeholderTextColor="#a8b5db"
        className="flex-1 ml-2 text-white"
      />
    </View>
  );
};

export default SearchBar;
