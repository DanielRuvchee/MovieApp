import MovieCard from "../components/MovieCard"
import { useState } from "react"
import "../css/Home.css"
import { searchMovies, getPopularMovies } from "../services/api";



function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "John Wick", relase_date: "2020"},
        {id: 2, title: "Zikina Dinastija", relase_date: "2021"},
        {id: 3, title: "Zone", relase_date: "2022"}
    ]

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
    }

    return <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery) && (
                <MovieCard movie={movie} key={movie.id} />
            ))}
        </div>
    </div>
}

export default Home