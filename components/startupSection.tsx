import StartupCard from "@/components/startupCard";

const StartupSection = ({ query }: { query?: string }) => {
  const startups = [
    {
      _createdAt: "2021-09-01T00:00:00Z",
      _id: 1,
      view: 55,
      author: { _id: 1 ,name:"ayush" },
      description: "Description for startup 1",
      category: "Tech",
      image:
        "https://techeela.com/wp-content/uploads/2023/12/a-spotlight-on-top-generative-ai-startups-in-2023.jpg.webp",
      title: "Startup 1",
    },
    {
      _createdAt: "2021-09-01T00:00:00Z",
      _id: 2,
      view: 78,
      author: { _id: 2 ,name:"ayush"},
      description: "Description for startup 2",
      category: "Tech",
      image:
        "https://techeela.com/wp-content/uploads/2023/12/a-spotlight-on-top-generative-ai-startups-in-2023.jpg.webp",
      title: "Startup 2",
    },
  ];

  return (
    <section className="section_container">
      <p className="text-30-semibold">
        {query ? `Startups results for "${query}"` : "All Startups"}
      </p>
      <ul className="mt-7 card_grid">
        {startups?.length > 0 ? (
          startups.map((startup:StartupTypeCard) => <StartupCard key={startup?._id} startup={startup} />)
        ) : (
          <p>No startups found</p>
        )}
      </ul>
    </section>
  );
};

export default StartupSection;
