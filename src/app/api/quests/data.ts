import Quest from "@/models/IQuest";

export const getQuests = async (): Promise<Quest[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/quests", {
      cache: "no-cache",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error:", response.status, response.statusText, text);
      throw new Error("Failed to fetch quests");
    }

    if (response.headers.get("content-type")?.includes("application/json")) {
      const quests: Quest[] = await response.json();
      return quests;
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error while fetching quests:", error);
    throw error;
  }
};
