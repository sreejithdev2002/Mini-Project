import axios from "axios"


const userInstance = axios.create({
    baseURL: "http://localhost:8000/"
})

const adminInstance = axios.create({
    baseURL: "http://localhost:8000/admin/"
})

export { userInstance, adminInstance }
