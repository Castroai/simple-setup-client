import axios from "axios";

const httpInstance = axios.create({
  baseURL: `http://${process.env.NEXT_PUBLIC_API_URL}:${process.env.NEXT_PUBLIC_API_PORT}`,
});
httpInstance.interceptors.request.use((request) => {
  console.log("Starting Request", JSON.stringify(request, null, 2));
  return request;
});

export default httpInstance;
