import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div>
                    <h2 className="text-2xl font-light">Hi! {user.displayName}</h2>
                    <h1 className="text-4xl font-bold">Welcome To Dashboard</h1>
                </div>
            </div>
        </>
    );
};

export default Dashboard;