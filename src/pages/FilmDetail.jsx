// pages/FilmDetail.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function FilmDetail() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/movies")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        const found = data.find(f => f.id === parseInt(id));
        if (!found) throw new Error("Film not found");
        setFilm(found);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [id]);

  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;
  if (!film) return <p className="p-4 text-gray-600">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{film.title}</h1>
      <p className="text-lg text-gray-700 mb-4">{film.summary}</p>

      <div className="space-y-2 text-gray-600">
        <p><strong>🎬 Director:</strong> {film.director}</p>
        <p><strong>📅 Year:</strong> {film.year}</p>
        <p><strong>🌍 Country:</strong> {film.country}</p>
        <p><strong>⏱️ Duration:</strong> {film.duration_minutes} min</p>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">🎞️ Credits</h2>
        <ul className="list-disc list-inside text-gray-700">
          {film.credits.map((credit, i) => (
            <li key={i}>{credit.name} – {credit.role}</li>
          ))}
        </ul>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">🧑‍🎤 Casting</h2>
        <ul className="list-disc list-inside text-gray-700">
          {film.casting.map((cast, i) => (
            <li key={i}>{cast.actor} as <span className="italic">{cast.character}</span></li>
          ))}
        </ul>
      </div>
    </div>
  );
}
