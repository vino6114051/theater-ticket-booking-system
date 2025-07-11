import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SeatSelection = () => {
  const navigate = useNavigate();
  const rows = 6;
  const cols = 10;
  const seatPrice = 150;

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);

  // Get booking info from localStorage
  const bookingInfo = JSON.parse(localStorage.getItem("currentBooking"));

  useEffect(() => {
    if (!bookingInfo) {
      navigate("/");
      return;
    }

    const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
    const sameShow = allBookings.find(
      (b) => b.movieId === bookingInfo.movieId && b.time === bookingInfo.time
    );
    setBookedSeats(sameShow ? sameShow.seats : []);
  }, [navigate]);

  const handleSeatClick = (seat) => {
    if (bookedSeats.includes(seat)) return;

    setSelectedSeats((prev) =>
      prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
    );
  };

  const handleContinue = () => {
    if (!bookingInfo) {
      alert("Booking info missing");
      return;
    }

    const updatedBooking = {
      ...bookingInfo,
      seats: selectedSeats,
      totalAmount: selectedSeats.length * seatPrice,
    };

    // Save to localStorage (NO useNavigate state)
    localStorage.setItem("currentBooking", JSON.stringify(updatedBooking));

    // Navigate without passing state
    navigate("/summary");
  };

  const renderSeats = () => {
    const seats = [];
    for (let row = 0; row < rows; row++) {
      for (let col = 1; col <= cols; col++) {
        const seat = `${String.fromCharCode(65 + row)}${col}`;
        const isBooked = bookedSeats.includes(seat);
        const isSelected = selectedSeats.includes(seat);

        seats.push(
          <div
            key={seat}
            onClick={() => handleSeatClick(seat)}
            style={{
              ...styles.seat,
              backgroundColor: isBooked
                ? "#e74c3c"
                : isSelected
                ? "#00cec9"
                : "#b2bec3",
              cursor: isBooked ? "not-allowed" : "pointer",
              boxShadow: isSelected ? "0 0 10px #00cec9" : "none",
            }}
          >
            {seat}
          </div>
        );
      }
    }
    return seats;
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>🎟️ Choose Your Seats</h2>

      <div style={styles.legend}>
        <span style={{ ...styles.legendItem, backgroundColor: "#b2bec3" }}>Available</span>
        <span style={{ ...styles.legendItem, backgroundColor: "#00cec9" }}>Selected</span>
        <span style={{ ...styles.legendItem, backgroundColor: "#e74c3c" }}>Booked</span>
      </div>

      <div style={styles.grid}>{renderSeats()}</div>

      <div style={styles.summary}>
        <p><strong>Seats:</strong> {selectedSeats.length ? selectedSeats.join(", ") : "None"}</p>
        <p><strong>Total:</strong> ₹{selectedSeats.length * seatPrice}</p>

        <button
          onClick={handleContinue}
          disabled={selectedSeats.length === 0}
          style={{
            ...styles.button,
            backgroundColor: selectedSeats.length > 0 ? "#0984e3" : "#ccc",
          }}
        >
          Continue →
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "30px",
    backgroundColor: "#1e272e",
    minHeight: "100vh",
    color: "#fff",
    fontFamily: "Segoe UI, sans-serif",
  },
  title: {
    fontSize: "28px",
    marginBottom: "20px",
    textAlign: "center",
  },
  legend: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
  },
  legendItem: {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "14px",
    color: "#fff",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(10, 1fr)",
    gap: "10px",
    justifyContent: "center",
    marginBottom: "30px",
  },
  seat: {
    width: "40px",
    height: "40px",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    color: "#fff",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
  summary: {
    textAlign: "center",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default SeatSelection;
