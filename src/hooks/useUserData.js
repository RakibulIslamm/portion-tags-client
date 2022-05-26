import axios from "axios";
import { useQuery } from "react-query";

function useUserData(email) {
    return useQuery("posts", async () => {
        const { data } = await axios.get(
            `https://portion-tags.herokuapp.com/user/${email}`
        );
        return data;
    });
}

export default useUserData;