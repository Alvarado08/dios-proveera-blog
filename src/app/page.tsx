import Link from "next/link";
import { type SanityDocument } from "next-sanity";
import { client } from "@/lib/client";
import { Card } from "@/components/ui/card";

export const revalidate = 30;

const POSTS_QUERY = `*[
  _type == "blog"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description}`;

export default async function Home() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {});

  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4">
        {posts.map((post) => (
          <Card className="p-4" key={post._id}>
            <Link href={`/${post.slug.current}`}>
              <div className="flex justify-between">
                <h2 className="text-xl font-semibold">{post.title}</h2>
                <h6>{new Date(post.publishedAt).toLocaleDateString()}</h6>
              </div>
              <p className="mt-2">{post.description}</p>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
