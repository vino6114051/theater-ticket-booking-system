import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";
import { motion } from "framer-motion";

const MovieDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesData.find((m) => m.id === parseInt(id));

  if (!movie) return <div style={styles.notFound}>Movie not found</div>;

  return (
    <motion.div
      style={styles.container}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div style={styles.card}>
        <img src={movie.poster} alt={movie.title} style={styles.poster} />
        <div style={styles.info}>
          <h2 style={styles.title}>{movie.title}</h2>
          <p style={styles.desc}>{movie.description}</p>
          <p style={styles.text}><strong>⏱ Duration:</strong> {movie.duration}</p>
          <p style={styles.text}><strong>🈯 Language:</strong> {movie.language}</p>
          <p style={styles.text}><strong>⭐ Rating:</strong> {movie.rating}</p>

          <button
            onClick={() => navigate(`/movie/${movie.id}/theaters`)}
            style={styles.button}
          >
            🎟️ Book Tickets
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#111827",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Segoe UI', sans-serif",
  },
  notFound: {
    color: "#fff",
    textAlign: "center",
    padding: "50px",
  },
  card: {
    backgroundColor: "#1f2937",
    color: "#fff",
    borderRadius: "16px",
    boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
    maxWidth: "900px",
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
  },
  poster: {
    width: "100%",
    maxWidth: "350px",
    height: "100%",
    objectFit: "cover",
  },
  info: {
    flex: 1,
    padding: "25px",
  },
  title: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  desc: {
    fontSize: "16px",
    marginBottom: "15px",
    lineHeight: "1.5",
    color: "#ccc",
  },
  text: {
    fontSize: "15px",
    marginBottom: "8px",
    color: "#ddd",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    fontSize: "16px",
    backgroundColor: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "0.3s",
  },
};

export default MovieDetail;
