import axios from "axios";

const httpInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_BASE_URL_INTERNAL,
});
// httpInstance.interceptors.request.use((request) => {
//   console.log("Starting Request", JSON.stringify(request, null, 2));
//   return request;
// });

export default httpInstance;
