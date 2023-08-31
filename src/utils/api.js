import axios from "axios"
import dayjs from "dayjs"
import {toast} from "react-toastify"

export const api = axios.create({
  baseURL: "http://localhost:4996/api"
})

export const getAllProperties = async() => {
  try {
    const response = await api.get("/property/properties", {
      timeout: 10 * 1000
    })
if (response.status === 400 || response.status === 500) {
  throw response.data
}
return response.data
  } catch (error) {
    toast.error("Something went wrong")
    throw error 
  }
}

export const getProperty = async(id) => {
  try {
    const response = await api.get(`/property/${id}`, {
      timeout: 10 * 1000
    })
if (response.status === 400 || response.status === 500) {
  throw response.data
}
return response.data
  } catch (error) {
    toast.error("Something went wrong")
    throw error
  }
}

export const createUser = async(email, token) => {
  try {
    await api.post(`/user/register`, {email}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    
    })
  } catch (error) {
    toast.error("Something went wrong, Please try again")
    throw error
  }
}


export const bookInspection = async (date, propertyId, email,token) => {

    try {
      await api.post(`/user/bookInspection/${propertyId}`,
      {
        email,
        id: propertyId,
        date: dayjs(date).format("DD/MM/YYYY")
      },
      {
       headers: {
        Authorization: `Bearer ${token}`,
       } 
      }
      )
    } catch (error) {
      toast.error("Something went wrong, Please try again")
      throw error
    }
}

export const removeBooking = async (id, email, token) => {
  try {
    await api.post(`/user/cancelBooking/${id}`,
    {
      email,
      
    },
    {
     headers: {
      Authorization: `Bearer ${token}`,
     } 
    }
    )
  } catch (error) {
    toast.error("Something went wrong, Please try again")
    throw error
  }
}

export const toFav = async(id,email,token) => {
  try {
    await api.post(
      `/user/toFav/${id}`,
      {
        email
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    )
  } catch (error) {
    toast.error("Something went wrong, Please try again")
    throw error
  }
}

export const getAllFavs = async(email, token, propertyId) => {
  if (!token) return

  try {
    const res = await api.post(
      `/user/allFavs`,
      {
        email,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
      },
    }
    );
    
    return res.data["favResidenciesID"]
  } catch (error) {
    toast.error("Something went wrong, while fetch your favorites")

    throw error
  }
}