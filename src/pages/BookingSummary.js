import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingSummary = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("currentBooking"));
    if (stored) {
      setBookingData(stored);
    } else {
      alert("No booking data. Redirecting to Home.");
      navigate("/");
    }
  }, [navigate]);

  const generateTicketId = () => {
    return "TICKET-" + Math.floor(100000 + Math.random() * 900000);
  };

  const handleConfirmBooking = () => {
    const ticketId = generateTicketId();

    const finalBooking = {
      ...bookingData,
      ticketId,
      date: new Date().toLocaleString(),
    };

    const allBookings = JSON.parse(localStorage.getItem("allBookings")) || [];
    localStorage.setItem("allBookings", JSON.stringify([...allBookings, finalBooking]));

    localStorage.removeItem("currentBooking");
    navigate("/history");
  };

  if (!bookingData)
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#1e272e",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Segoe UI, sans-serif",
        }}
      >
        Loading booking summary...
      </div>
    );

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e272e",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#2d3436",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 0 15px rgba(0,0,0,0.3)",
          maxWidth: "500px",
          width: "100%",
          color: "#fff",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🎫 Booking Summary</h2>

        <p><strong>Movie:</strong> {bookingData.movieName}</p>
        <p><strong>Theater:</strong> {bookingData.theater}</p>
        <p><strong>Showtime:</strong> {bookingData.time}</p>
        <p><strong>Language:</strong> {bookingData.language}</p>
        <p><strong>Seats:</strong> {bookingData.seats.join(", ")}</p>
        <p><strong>Total Amount:</strong> ₹{bookingData.totalAmount}</p>

        <button
          onClick={handleConfirmBooking}
          style={{
            marginTop: "20px",
            padding: "12px 24px",
            backgroundColor: "#00b894",
            border: "none",
            color: "#fff",
            borderRadius: "8px",
            cursor: "pointer",
            width: "100%",
            fontSize: "16px",
          }}
        >
          ✅ Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookingSummary;
