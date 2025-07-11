import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import moviesData from "../data/movies.json";

const TheaterSelection = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = moviesData.find((m) => m.id === parseInt(id));

  const theaters = [
    {
      name: "PVR Cinemas",
      shows: ["2025-07-11 10:00 AM", "2025-07-11 1:00 PM", "2025-07-11 4:00 PM"],
    },
    {
      name: "INOX",
      shows: ["2025-07-11 11:00 AM", "2025-07-11 2:00 PM", "2025-07-11 5:00 PM"],
    },
    {
      name: "Sathyam Cinemas",
      shows: ["2025-07-11 12:00 PM", "2025-07-11 3:00 PM", "2025-07-11 6:00 PM"],
    },
  ];

  const handleSelect = (theater, time) => {
    const bookingInfo = {
      movieId: movie.id,
      movieTitle: movie.title,
      theater,
      time,
    };
    localStorage.setItem("currentBooking", JSON.stringify(bookingInfo));
    navigate("/seats");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🎥 Select Theater & Show Time for {movie.title}</h2>
      {theaters.map((t, index) => (
        <div key={index} style={styles.theaterCard}>
          <h3 style={styles.theaterName}>{t.name}</h3>
          <div style={styles.shows}>
            {t.shows.map((time, i) => (
              <button
                key={i}
                style={styles.button}
                onClick={() => handleSelect(t.name, time)}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    backgroundColor: "#111827", // dark theme
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "'Segoe UI', sans-serif",
  },
  heading: {
    fontSize: "28px",
    marginBottom: "30px",
    textAlign: "center",
    color: "#ffffff",
  },
  theaterCard: {
    backgroundColor: "#1f2937",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
  },
  theaterName: {
    fontSize: "20px",
    marginBottom: "12px",
    color: "#93c5fd",
  },
  shows: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
  },
  button: {
    backgroundColor: "#3b82f6",
    border: "none",
    borderRadius: "8px",
    color: "#fff",
    padding: "10px 16px",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

export default TheaterSelection;
