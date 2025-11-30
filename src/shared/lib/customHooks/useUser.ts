import { useEffect, useState } from "react"
import axios from "axios"
import { User } from "../../../app/types/global"

export const useUser = (userId: number | null | undefined): { user: User | undefined } => {
    const [user, setUser] = useState<User>()

    const fetchUser = async (id: number) => {
      const userDataRes = await axios.get(
        `${import.meta.env.VITE_DEVAPI}users/${id}`,
        { withCredentials: true }
      );

      setUser(userDataRes.data);
    }

    useEffect(() => {
      if(!userId) {
        setUser(undefined);
        return;
      }
      fetchUser(userId);
    },[userId])

    return { user };
}

