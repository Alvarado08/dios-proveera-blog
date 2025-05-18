import { client } from "@/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityDocument } from "next-sanity";

const POSTS_QUERY = `*[
  _type == "blog" && defined(slug.current)
]|order(publishedAt desc)[0...12]{
  _id,
  title,
  slug,
  publishedAt,
  description,
  image
}`;

const { projectId, dataset } = client.config();

const urlFor = (source: any) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export async function fetchSanityPosts(): Promise<SanityDocument[]> {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
  return posts.map((post) => ({
    ...post,
    imageUrl: post.image
      ? urlFor(post.image)
          ?.width(800)
          .height(450)
          .quality(100)
          .fit("crop")
          .url()
      : null,
  }));
}
