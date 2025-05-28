// pages/HomePage.jsx
import { useEffect, useState } from "react";
import FilmCard from "../components/FilmCard";

export default function HomePage() {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        setFilms(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4 text-gray-600">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">🎞️ Movie List</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {films.map(film => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>
    </div>
  );
}
