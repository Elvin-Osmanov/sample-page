import Badge from "@/models/IBadge";

export const getBadges = async (): Promise<Badge[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/badges", {
      cache: "no-cache",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error:", response.status, response.statusText, text);
      throw new Error("Failed to fetch badges");
    }

    if (response.headers.get("content-type")?.includes("application/json")) {
      const badges: Badge[] = await response.json();
      return badges;
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error while fetching badges:", error);
    throw error;
  }
};
