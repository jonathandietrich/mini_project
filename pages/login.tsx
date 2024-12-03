import Layout from "../components/Layout";

const Login = () => {
    return (
        <Layout>
            <h2 className="text-3xl font-bold mb-4">Login</h2>
            <form className="space-y-4">
                <div>
                    <label className="block font-bold mb-1">Email</label>
                    <input
                        type="email"
                        className="border rounded w-full p-2"
                        placeholder="Enter your email"
                    />
                </div>
                <div>
                    <label className="block font-bold mb-1">Password</label>
                    <input
                        type="password"
                        className="border rounded w-full p-2"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
                    Login
                </button>
            </form>
        </Layout>
    );
};

export default Login;
