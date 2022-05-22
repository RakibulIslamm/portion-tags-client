import { Navigate, useLocation } from "react-router-dom";

function AdminRoute({ children }) {
    let admin = false;
    let location = useLocation();

    if (!admin) {
        return <Navigate to="*" state={{ from: location }} replace />;
    }

    return children;
}

export default AdminRoute;