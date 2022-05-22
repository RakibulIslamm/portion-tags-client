import { useContext } from "react"
import { AuthContext } from "../Components/ContextProvider/ContextProvider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;