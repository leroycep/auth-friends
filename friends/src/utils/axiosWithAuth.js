import axios from "axios";
import { TOKEN_KEY } from "../constants";

export function axiosWithAuth() {
  return axios.create({
    headers: {
      Authorization: localStorage.getItem(TOKEN_KEY)
    }
  });
}
