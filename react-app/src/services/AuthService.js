import axios from 'axios';
import { hostNameUrl } from "../config/api";

export const AuthService = {
  login: async (username, password) => {
    try {
      const response = await axios.post(`${hostNameUrl}/login`, {
        "userName": username,
        "password": password,
      });
      const user = response.data;
      return user;
    } catch (error) {
      throw new Error('Invalid credentials');
    }
  },

  logout: async () => {
    try {
      await axios.post(`${hostNameUrl}/logout`);
    } catch (error) {
      // Handle logout error (optional)
    }
  },
};