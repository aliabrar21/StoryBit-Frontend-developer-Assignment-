import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { fetchPopular, fetchTrending } from "@/lib/tmdb";

export default async function Home() {
  const popular = await fetchPopular();
  const trending = await fetchTrending();

  return (
    <main className="pb-20 bg-black text-white">
      <HeroBanner movie={popular.results[0]} />

      <section className="px-6 mt-8 space-y-10">
        <MovieRow movies={trending.results} categoryTitle="Trending Now" />
        <MovieRow movies={popular.results} categoryTitle="Popular" />
      </section>
    </main>
  );
}
