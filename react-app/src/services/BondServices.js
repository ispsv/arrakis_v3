import { hostNameUrl } from "../config/api";
import axios from "axios";

export const findPets = () => {
  const pets = axios.get(`${hostNameUrl}/dogs`);
  return pets;
};
export const getAllBonds = () => {
  const all_bonds = axios.get(`${hostNameUrl}/bonds`);
  return all_bonds;
};
export const getUserBonds = () => {
  const user_bonds = axios.get(`${hostNameUrl}/bonds`);
  return user_bonds;
};
// Function to fetch bond details based on bondId
export const getBondDetails = async (bondId) => {
  try {
    const response = await axios.get(`${hostNameUrl}/bonds/${bondId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bond details:', error);
    throw error;
  }
}