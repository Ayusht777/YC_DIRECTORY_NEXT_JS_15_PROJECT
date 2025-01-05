import HeroSection from "@/components/heroSection";
import StartupSection from "@/components/startupSection";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const { query } = await searchParams;
  
  return (
    <div className="w-full">
      <HeroSection query={query} />
      <StartupSection query={query} />
    </div>
  );
}
