import { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Movies = () => {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const res = await fetch(
                    `https://api.themoviedb.org/3/movie/popular?api_key=YOUR_API_KEY`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch movies");
                }
                const data = await res.json();
                if (data.results) {
                    setMovies(data.results);
                } else {
                    throw new Error("Invalid data structure");
                }
            } catch (err: any) {
                setError(err.message || "An unexpected error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    return (
        <Layout>
            <div className="container mx-auto p-4">
                <h2 className="text-3xl font-bold mb-4">Popular Movies</h2>

                {loading && <p>Loading movies...</p>}

                {error && <p className="text-red-500">{error}</p>}

                {!loading && !error && movies.length === 0 && (
                    <p>No movies available at the moment.</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <div key={movie.id} className="border rounded shadow p-4">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-full h-64 object-cover"
                            />
                            <h3 className="text-lg font-semibold mt-2">
                                {movie.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default Movies;
