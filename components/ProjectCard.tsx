import { Link } from "expo-router";
import { Image, Platform, Text, TouchableOpacity } from "react-native";

const ProjectCard = ({ _id, name, isActive, imageUrl }: Project) => {
  return (
    <Link href={`/project/${_id}`} asChild>
      <TouchableOpacity className="w-[30%]">
        <Image
          source={{
            uri: imageUrl
              ? Platform.OS === "android"
                ? `${process.env.EXPO_PUBLIC_BASE_URL_ANDROID}/${imageUrl}`
                : `${process.env.EXPO_PUBLIC_BASE_URL}${imageUrl}`
              : "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm">{name}</Text>
      </TouchableOpacity>
    </Link>
  );
};
export default ProjectCard;
