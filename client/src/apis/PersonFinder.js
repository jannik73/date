import axios from "axios";
import axiosRetry from "axios-retry";

const PersonFinder = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:7000/api/v1/persons"
      : "https://get-to-know-you.herokuapp.com/api/v1/persons",
      
  timeout: 5000,
});

axiosRetry(PersonFinder, { retries: 3 });

export default PersonFinder;
