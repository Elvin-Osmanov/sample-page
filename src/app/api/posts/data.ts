import Post from "@/models/IPost";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-cache",
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Error:", response.status, response.statusText, text);
      throw new Error("Failed to fetch posts");
    }

    if (response.headers.get("content-type")?.includes("application/json")) {
      const posts: Post[] = await response.json();
      return posts;
    } else {
      throw new Error("Response is not JSON");
    }
  } catch (error) {
    console.error("Error while fetching posts:", error);
    throw error;
  }
};
