import React, { useEffect, useState } from "react";
import moviesData from "../data/movies.json";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState({ genre: "All", language: "All", rating: "All" });
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setMovies(moviesData);
    setFiltered(moviesData);
  }, []);

  useEffect(() => {
    let updated = [...movies];
    if (filters.genre !== "All") {
      updated = updated.filter((movie) => movie.genre === filters.genre);
    }
    if (filters.language !== "All") {
      updated = updated.filter((movie) => movie.language === filters.language);
    }
    if (filters.rating !== "All") {
      updated = updated.filter((movie) => Math.floor(movie.rating) >= parseInt(filters.rating));
    }
    if (searchTerm.trim() !== "") {
      updated = updated.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFiltered(updated);
  }, [filters, searchTerm, movies]);

  const handleFilter = (type, value) => {
    setFilters({ ...filters, [type]: value });
  };

  const genres = ["All", "Action", "Drama", "Thriller", "Sci-Fi", "Romance", "Fantasy"];
  const languages = ["All", "Tamil", "English", "Telugu"];
  const ratings = ["All", "6", "7", "8", "9"];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🍿 Explore Movies</h1>

      <div style={styles.searchSection}>
        <input
          style={styles.searchInput}
          type="text"
          placeholder="Search movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select style={styles.select} onChange={(e) => handleFilter("genre", e.target.value)}>
          {genres.map((g) => <option key={g}>{g}</option>)}
        </select>

        <select style={styles.select} onChange={(e) => handleFilter("language", e.target.value)}>
          {languages.map((l) => <option key={l}>{l}</option>)}
        </select>

        <select style={styles.select} onChange={(e) => handleFilter("rating", e.target.value)}>
          {ratings.map((r) => <option key={r} value={r}>{r === "All" ? "All Ratings" : `${r}+`}</option>)}
        </select>
      </div>

      <div style={styles.grid}>
        {filtered.map((movie) => (
          <motion.div
            key={movie.id}
            style={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <img src={movie.poster} alt={movie.title} style={styles.poster} />
            <div style={styles.details}>
              <h3 style={styles.title}>{movie.title}</h3>
              <p style={styles.info}>⭐ {movie.rating} | 🎭 {movie.genre}</p>
              <p style={styles.info}>⏱ {movie.duration} | 🈯 {movie.language}</p>
              <button style={styles.button} onClick={() => navigate(`/movie/${movie.id}`)}>
                Book Tickets 🎟️
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px 20px",
    background: "#111827",
    color: "#fff",
    minHeight: "100vh",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "36px",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "700",
  },
  searchSection: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "25px",
  },
  searchInput: {
    padding: "10px 16px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#1f2937",
    color: "#fff",
    width: "200px",
  },
  select: {
    padding: "10px 14px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#1f2937",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },
  card: {
    backgroundColor: "#1f2937",
    borderRadius: "16px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.4)",
    overflow: "hidden",
    transition: "transform 0.3s ease",
  },
  poster: {
    width: "100%",
    height: "350px",
    objectFit: "cover",
  },
  details: {
    padding: "15px",
    textAlign: "center",
  },
  title: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#fff",
    marginBottom: "10px",
  },
  info: {
    fontSize: "14px",
    color: "#ccc",
    margin: "5px 0",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  }
};

export default Home;
