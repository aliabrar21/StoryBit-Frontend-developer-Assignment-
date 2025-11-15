"use client";

import MovieCard from "./MovieCard";
import { Movie } from "@/types/movie";

export default function MovieRow({
  movies,
  categoryTitle,
}: {
  movies: Movie[];
  categoryTitle: string;
}) {
  return (
    <section className="px-6 py-6">
      <h3 className="text-xl font-semibold mb-3">{categoryTitle}</h3>

      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
