import Group from "@/models/IGroup";

export const getGroups = async (): Promise<Group[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/groups", {
      cache: "no-cache",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error:", response.status, response.statusText, text);
      throw new Error("Failed to fetch groups");
    }

    if (response.headers.get("content-type")?.includes("application/json")) {
      const groups: Group[] = await response.json();
      return groups;
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error while fetching groups:", error);
    throw error;
  }
};
