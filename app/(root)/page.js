import SearchForm from "@/components/SearchForm";
import Image from "next/image";

export default async function Home({ searchParams }) {
  const query = await searchParams.query;
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup, <br />
        Connect With Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
      </p>
      {/* <div> */}
      <SearchForm query={query} />
      {/* </div> */}
    </section>
  );
}
