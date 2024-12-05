import { useState, useEffect } from "react";
import Header from "../components/Header";

const WatchlistPage = () => {
    const [watchlist, setWatchlist] = useState<any[]>([]);

    useEffect(() => {
        const savedWatchlist = localStorage.getItem("watchlist");
        if (savedWatchlist) {
            setWatchlist(JSON.parse(savedWatchlist));
        }
    }, []);

    const removeFromWatchlist = (movieId: string) => {
        const updatedWatchlist = watchlist.filter((movie) => movie.imdbID !== movieId);
        setWatchlist(updatedWatchlist);
        localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Header />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Your Watchlist</h1>

                {watchlist.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {watchlist.map((movie) => (
                            <div key={movie.imdbID} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={
                                        movie.Poster !== "N/A"
                                            ? movie.Poster
                                            : "/placeholder.jpg"
                                    }
                                    alt={movie.Title}
                                    className="w-full h-64 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-lg font-semibold text-gray-800">{movie.Title}</h2>
                                    <p className="text-gray-600">Year: {movie.Year}</p>
                                    <button
                                        onClick={() => removeFromWatchlist(movie.imdbID)}
                                        className="bg-red-500 hover:bg-red-600 text-white mt-4 px-4 py-2 rounded w-full"
                                    >
                                        Remove from Watchlist
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-center">Your watchlist is empty. Add some movies!</p>
                )}
            </div>
        </div>
    );
};

export default WatchlistPage;
