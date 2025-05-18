import { fetchSanityPosts } from "@/lib/fetchPosts";
import { AppleCardsCarouselDemo2 } from "./BlogCarousel2";

export default async function PostsWrapper() {
  const sanityPosts = await fetchSanityPosts();
  const posts = sanityPosts.map((post) => ({
    ...post,
    title: post.title || "",
    publishedAt: post.publishedAt || "",
    description: post.description || "",
    imageUrl: post.imageUrl, // already null if not present
  }));

  return <AppleCardsCarouselDemo2 posts={posts} />;
}
