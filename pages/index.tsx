import Layout from "../components/Layout";

const Home = () => {
    return (
        <Layout>
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-4">Welcome to RateMyMovies</h2>
                <p className="text-lg">Discover, rate, and review your favorite movies.</p>
                <div className="mt-6">
                    <a href="/movies" className="bg-blue-500 text-white py-2 px-4 rounded">
                        Browse Movies
                    </a>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
