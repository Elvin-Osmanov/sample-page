import IUser from "@/models/IUser";

export const getUsers = async (): Promise<IUser[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      cache: "no-cache",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error:", response.status, response.statusText, text);
      throw new Error("Failed to fetch users");
    }

    if (response.headers.get("content-type")?.includes("application/json")) {
      const users: IUser[] = await response.json();
      return users;
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error while fetching users:", error);
    throw error;
  }
};
