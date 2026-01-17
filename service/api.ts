import { Platform } from "react-native";

const BASE_URL =
  Platform.OS === "android"
    ? "http://10.163.200.98:4000/api/projects"
    : "http://localhost:4000/api/projects";

export const fetchProjects = async () => {
  const response = await fetch(`${BASE_URL}`, {
    method: "GET",
  });

  if (!response.ok) {
    //@ts-ignore
    throw new Error("Failed to fetch", response.statusText);
  }
  const data = await response.json();
  return data?.results;
};
