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
  const pets = axios.get(`${hostNameUrl}/dogs`);
  return pets;
};