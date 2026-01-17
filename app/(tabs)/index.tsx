import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { useFetch } from "@/hooks/useFetch";
import { fetchProjects } from "@/service/api";
import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  View,
} from "react-native";

const Index = () => {
  const router = useRouter();
  const {
    data: projects,
    loading: isLoading,
    error: isError,
  } = useFetch(() => fetchProjects(), true);

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />
      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : isError ? (
          <Text>Error:{isError?.message}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeHolder="Search for a movie"
            />

            {projects?.length > 0 && (
              <>
                <Text className="text-lg text-white font-bold mb-3">
                  Trending Projects
                </Text>
                <FlatList
                  data={projects}
                  renderItem={({ item }) => <ProjectCard {...item} />}
                  showsHorizontalScrollIndicator={false}
                  className="mb-4 mt-3"
                  keyExtractor={(item) => item.projectId.toString()}
                  numColumns={3}
                  ItemSeparatorComponent={() => <View className="w-4" />}
                  columnWrapperStyle={{
                    gap: 20,
                    justifyContent: "flex-start",
                    paddingRight: 5,
                    marginBottom: 10,
                  }}
                  scrollEnabled={false}
                />
              </>
            )}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default Index;
