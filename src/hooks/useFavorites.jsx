import { useContext, useEffect, useRef } from "react";
import UserDetailsContext from "../context/UserDetailsContext";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import { getAllFavs } from "../utils/api";

const useFavorites = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext);
  const queryRef = useRef();
  const { user } = useAuth0();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: "allFavorites",
    queryFn: () => getAllFavs(user?.email, userDetails?.token),
    onSuccess: (data) => setUserDetails((prev) => ({ ...prev, favorites: data })),
    enabled: user !== undefined,
    staleTime: 30000,
  });

  queryRef.current = refetch;

  useEffect(() => {
    queryRef.current && queryRef.current();
  }, [userDetails?.token]);

  return { data, isError, isLoading, refetch };
};

export default useFavorites;
