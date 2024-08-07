import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/9a880dbc-6e94-454c-b001-2e85b44605cc-1k7xz2.jpg",
  "https://utfs.io/f/52e45c82-4775-453b-9cae-c10ca1365769-ratrd8.jpg",
  "https://utfs.io/f/ec6aee0d-403f-4b0a-a272-e4ba3c2bb0e6-qg47.png",
  "https://utfs.io/f/9727f0da-7edc-429d-bdd1-c880bd642ce8-w26jc1.jpg",
  "https://utfs.io/f/01991d90-3eca-4847-8174-09a0b09ef37e-230so.jpg",
  "https://utfs.io/f/9e14f1fc-982b-4184-a724-1a572bb7fdfe-puok51.jpg",
  "https://utfs.io/f/6f319f25-5e17-4776-bdd7-5be55768faf8-rb706x.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> 
        {posts.map((post) => (
        <div key={post.id}>{ post.name }</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
