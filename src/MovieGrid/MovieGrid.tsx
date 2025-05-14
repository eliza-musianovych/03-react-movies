import css from "./MovieGrid.module.css";
import type { Movie } from "../types/movie";

interface MovieGridProps {
    onSelect: () => void;
    movies: Movie[];
};

export default function MovieGrid({onSelect, movies}: MovieGridProps) {
    return ( 
    <ul className={css.grid}>
      {movies.map((movie) => (
        <li key={movie.id}>
        <div className={css.card}>
          <img
                className={css.image}
                src={movie.poster_path}
                alt={movie.title}
                loading="lazy"
              />
            <h2 className={css.title}>{movie.title}</h2>
        </div>
      </li>
      ))
    }
    </ul>
    )
}