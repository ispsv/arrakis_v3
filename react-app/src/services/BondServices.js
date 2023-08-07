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
export const getUserBonds = (userId) => {
  const user_bonds = axios.get(`${hostNameUrl}/users/${userId}/bonds`);
  return user_bonds;
};
export const getUserTrades = (userId) => {
  const user_trades = axios.get(`${hostNameUrl}/users/${userId}/trades`);
  return user_trades;
};
// Function to fetch bond details based on bondId
export const getBondDetails = (id) => {
    const selected_bond  = axios.get(`${hostNameUrl}/bonds/${id}`);
    console.log(selected_bond);
    return selected_bond;
}
export const getTradesDetails = (id) => {
  const all_trades_for_selected_bond  = axios.get(`${hostNameUrl}/bonds/${id}/trades`);
  return all_trades_for_selected_bond;
};
