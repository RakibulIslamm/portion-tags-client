import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function AdminRoute({ children }) {
    const { admin, isLoading2 } = useAuth();
    let location = useLocation();
    /* const { data: posts } = useQuery("posts", async () => {
        const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/posts"
        );
        return data;
    });
    console.log(posts); */

    if (isLoading2) {
        return
    }


    if (!admin) {
        return <Navigate to="*" state={{ from: location }} replace />;
    }

    return children;
}

export default AdminRoute;