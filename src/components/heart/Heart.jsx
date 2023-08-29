import React, { useContext, useEffect, useState } from 'react'
import { AiFillHeart } from "react-icons/ai";
import useAuthCheck from "../../hooks/useAuthCheck";
import { useMutation } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailsContext from "../../context/UserDetailsContext";
import { toFav } from "../../utils/api";
import { checkFavorites, updateFavorites } from "../../utils/common";


const Heart = ({id}) => {
  const [heartColor, setHeartColor] = useState("#0000FF")
  const {user} = useAuth0()

  const {validateLogin} = useAuthCheck()

  const {
    userDetails: {favorites, token},
    setUserDetails,
} = useContext(UserDetailsContext);

useEffect(() => {
  setHeartColor(() => checkFavorites(id, favorites))
}, [favorites])


  const {mutate} = useMutation({
    mutationFn: () => toFav(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) =>(
        {...prev, favorites: updateFavorites(id, prev.favorites)}
      ))
    }
  })

  const handleLike = () => {
    if (validateLogin()) {
      mutate()
      setHeartColor((prev) => prev === "#FF0000" ? "#0000FF" : "#FF0000")
    }
  }

  return (
    <AiFillHeart size={30} color={heartColor} onClick={(e) =>{
      e.stopPropagation()
      handleLike()
    }} />

  )
}

export default Heart