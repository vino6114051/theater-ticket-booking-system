import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

import MovieDetails from "./pages/MovieDetails";

import TheaterSelection from './pages/TheaterSelection';
import SeatSelection from './pages/SeatSelection';
import BookingSummary from './pages/BookingSummary';
import BookingHistory from './pages/BookingHistory';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movieDetails/:id" element={<MovieDetails />} />

        <Route path="/select-theater/:id" element={<TheaterSelection />} />
        <Route path="/select-seat/:movieId/:theaterId" element={<SeatSelection />} />
        <Route path="/summary" element={<BookingSummary />} />
        <Route path="/history" element={<BookingHistory />} />
      </Routes>
    </Router>
  );
}

export default App;
