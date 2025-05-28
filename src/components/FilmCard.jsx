// components/FilmCard.jsx
import { Link } from "react-router-dom";

export default function FilmCard({ film }) {
  return (
    <Link to={`/film/${film.id}`}>
      <div className="bg-white shadow-lg hover:shadow-xl transition-shadow rounded-2xl p-6 border border-gray-100 hover:border-gray-300">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{film.title}</h2>
        <p className="text-gray-600">🎬 Director: <span className="font-medium">{film.director}</span></p>
        <p className="text-gray-500">📅 Year: {film.year}</p>
      </div>
    </Link>
  );
}
