import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_DEV_API,
  withCredentials: true,
});

// Response interceptor to detect 401 errors
api.interceptors.response.use(
  (response) => response, // Pass successful responses
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Session expired. Logging out...");
      window.dispatchEvent(new Event("logout")); // Notify all components
    }
    return Promise.reject(error);
  }
);

export default api;
