import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const query = (await searchParams?.query) || "";

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: {
        _id: 1,
        name: "Nihal",
      },
      _id: 1,
      description: "This is a description",
      image: "https://stock.adobe.com/search?k=robot&asset_id=210969565",
      category: "Robots",
      title: "We Robots",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        {/* <div> */}
        <SearchForm query={query} />
        {/* </div> */}
      </section>
      <section className="section_container">
        <p className="text-3xl font-bold">{query ? `Search results for ${query}` : "All Startups"}</p>
        <ul className="card_grid">
          {posts.length > 0 &&
            posts.map((post) => <StartupCard key={post._id} post={post} />)}
        </ul>
      </section>
    </>
  );
}
