import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <>
            <Link
                className={`hover:font-semibold ${match && 'font-semibold'} transition-all ease-linear duration-150`}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );
}

export default CustomLink;