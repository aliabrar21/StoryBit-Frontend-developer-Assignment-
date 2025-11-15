import Image from "next/image";
import { fetchMovieById } from "@/lib/tmdb";

export default async function MovieDetail(props: { params: Promise<{ id: string }> }) {
  // FIX: unwrap params because it is a Promise in Next.js 14+
  const { id } = await props.params;

  const movie = await fetchMovieById(id);

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "/fallback.jpg";

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/fallback.jpg";

  return (
    <main className="relative min-h-screen text-white">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${backdrop})` }}
      ></div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black"></div>

      {/* Content */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">

          {/* Poster */}
          <div className="w-[260px] md:w-[300px] shadow-2xl rounded-lg overflow-hidden">
            <Image
              src={poster}
              alt={movie.title}
              width={500}
              height={750}
              className="rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {movie.title}
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {movie.overview || "No description available."}
            </p>

            <div className="flex flex-wrap gap-5 text-gray-400 text-sm md:text-base">
              <p><strong>Release Date:</strong> {movie.release_date}</p>
              <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
              <p><strong>Votes:</strong> {movie.vote_count}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
