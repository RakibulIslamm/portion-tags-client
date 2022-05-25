import { Link, useMatch, useResolvedPath } from "react-router-dom";

function customLink() {
    const HeaderLink = ({ children, to, ...props }) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return (
            <div>
                <Link
                    className={`${match ? 'font-bold text-orange-600' : ''}`}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    const SideBarLink = ({ children, to, ...props }) => {
        let resolved = useResolvedPath(to);
        let match = useMatch({ path: resolved.pathname, end: true });
        return (
            <div>
                <Link
                    className={`${match && 'rounded-sm bg-gray-800 text-gray-50 font-bold block'} hover:rounded-sm hover:bg-gray-800 hover:text-gray-50 block`}
                    to={to}
                    {...props}
                >
                    {children}
                </Link>
            </div>
        );
    }

    return { HeaderLink, SideBarLink }

}

export default customLink;