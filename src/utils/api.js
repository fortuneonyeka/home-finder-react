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

export const createUser = async(email) => {
  try {
    await api.post(`/user/register`, {email})
  } catch (error) {
    toast.error("Something went wrong, Please try again")
    throw error
  }
}