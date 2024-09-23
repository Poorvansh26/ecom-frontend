import axios from "axios";

const API = axios.create({
  baseURL: "https://ecom-proj-production.up.railway.app/api",
});
delete API.defaults.headers.common["Authorization"];
export default API;
