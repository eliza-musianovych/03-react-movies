import css from "./SearchBar.module.css";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar ({onSubmit}: SearchBarProps) {
   const [query, setQuery] = useState<string>('');

   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
   };

   const handleSubmin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const queryTrimmed = query.trim();

    if (queryTrimmed === '') {
        toast.error('Please enter your search query.')
        return
    };

    onSubmit(queryTrimmed);
    setQuery('');
   }

    return <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
         Powered by TMDB
        </a>
        <form className={css.form} onSubmit={handleSubmin}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="Search movies..."
            autoFocus
            value={query}
            onChange={handleChange}
        />
        <button className={css.button} type="submit">
           Search 
        </button>
        <Toaster />
        </form>
      </div>
    </header>
    
}