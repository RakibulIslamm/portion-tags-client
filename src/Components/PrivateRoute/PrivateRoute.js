import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    let user = true;
    let location = useLocation();

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}

export default PrivateRoute;