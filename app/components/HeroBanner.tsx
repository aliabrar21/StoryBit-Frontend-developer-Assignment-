import Image from "next/image";
import { Movie } from "@/types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
  return (
    <section className="relative w-full h-[450px] md:h-[600px]">
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        fill
        priority
        className="object-cover"
      />

      <div className="absolute bottom-10 left-10 text-white drop-shadow-2xl">
        <h2 className="text-3xl md:text-5xl font-bold">{movie.title}</h2>
      </div>
    </section>
  );
}
