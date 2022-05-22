import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function PrivateRoute({ children }) {
    let { user, isLoading } = useAuth();
    let location = useLocation();

    if (isLoading) {
        return
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRoute;