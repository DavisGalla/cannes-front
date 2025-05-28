// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FilmDetail from "./pages/FilmDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/film/:id" element={<FilmDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
