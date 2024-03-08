import axios from "axios";

const httpInstance = axios.create({
  baseURL: "http://localhost:3333",
});
// httpInstance.interceptors.request.use((request) => {
//   console.log("Starting Request", JSON.stringify(request, null, 2));
//   return request;
// });

export default httpInstance;
