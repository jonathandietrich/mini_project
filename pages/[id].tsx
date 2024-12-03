import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const MovieDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [movie, setMovie] = useState<any>(null);

    useEffect(() => {
        if (!id) return;
        const fetchMovie = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`);
            const data = await res.json();
            setMovie(data);
        };
        fetchMovie();
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    return (
        <Layout>
            <div className="flex flex-col lg:flex-row items-start lg:items-center">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full lg:w-1/3 h-auto rounded shadow-lg"
                />
                <div className="lg:ml-8 mt-4 lg:mt-0">
                    <h2 className="text-3xl font-bold">{movie.title}</h2>
                    <p className="text-gray-600">{movie.release_date}</p>
                    <p className="mt-4">{movie.overview}</p>
                </div>
            </div>
        </Layout>
    );
};

export default MovieDetails;
