import axios from "axios"

const env = process.env.NODE_ENV
const URL = process.env.NEXT_PUBLIC_API

export const BASE_API = env === "production" ? URL : "http://localhost:8000/api/v1"

export const baseApi = axios.create({
  baseURL: BASE_API,
  withCredentials: true,
  headers: { "Content-Type": "application/json" }
})