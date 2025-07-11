import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import TheaterSelection from "./pages/TheaterSelection";
import SeatSelection from "./pages/SeatSelection";
import BookingSummary from "./pages/BookingSummary";
import BookingHistory from "./pages/BookingHistory";
import Login from "./pages/Login";
import Register from "./pages/Register";

// Components
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Movie Booking Flow */}
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/movie/:id/theaters" element={<TheaterSelection />} />
        <Route path="/seats" element={<SeatSelection />} />
        <Route path="/summary" element={<BookingSummary />} />

        {/* Booking History */}
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
