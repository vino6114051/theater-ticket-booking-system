import React, { useEffect, useState } from "react";

const BookingHistory = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
    setBookings(allBookings);
  }, []);

  if (bookings.length === 0) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>📜 Booking History</h2>
        <p>No bookings found.</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📜 Booking History</h2>
      {bookings.map((booking, index) => (
        <div key={index} style={styles.card}>
          <p><strong>🎬 Movie:</strong> {booking.movieName}</p>
          <p><strong>🏢 Theater:</strong> {booking.theater}</p>
          <p><strong>⏰ Time:</strong> {booking.time}</p>
          <p><strong>🗣 Language:</strong> {booking.language}</p>
          <p><strong>💺 Seats:</strong> {booking.seats.join(", ")}</p>
          <p><strong>💰 Total:</strong> ₹{booking.totalAmount}</p>
          <p><strong>🆔 Ticket ID:</strong> {booking.ticketId}</p>
          <p><strong>📅 Date:</strong> {booking.date}</p>

          {/* Optional QR Code placeholder */}
          <div style={styles.qrBox}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${booking.ticketId}`}
              alt="QR Code"
            />
          </div>
        </div>
      ))}
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
    textAlign: "center",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#2d3436",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
    maxWidth: "500px",
    margin: "auto",
  },
  qrBox: {
    textAlign: "center",
    marginTop: "15px",
  },
};

export default BookingHistory;
