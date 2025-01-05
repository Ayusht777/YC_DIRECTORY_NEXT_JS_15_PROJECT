import SearchFrom from "@/components/searchFrom";
const HeroSection = ({query}:{query?:string}) => {
  return (
    <section className="pink_container">
      <h1 className="heading">
        Pitch Your Startup <br /> Connect with Entrepreneurs
      </h1>
      <p className="sub-heading !max-w-3xl">
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitors
      </p>
      <SearchFrom query={query} />
    </section>
  );
};

export default HeroSection;
