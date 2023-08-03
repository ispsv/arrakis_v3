import React, { useState, useEffect } from "react";
import { findPets } from "../../services/BondServices";
import styles from "./Pets.module.css";
import Table from 'react-bootstrap/Table';

export const ViewBond = (props) => {
    const [ViewBond, setViewBond] = useState([]);

    useEffect(() => {
      findPets()
            .then(({data}) => {
            setViewBond(data);
            });
    }, []);
  return (
    <>
            <Table className="table-success" >
            <thead>
            <tr>
              <th>Column Name</th>
              <th>Data</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>BondId</td>
              <td>{props.BondId}</td>
            </tr>
            <tr>
              <td>BondHolders</td>
              <td>{props.BondId}</td>
            </tr>
            <tr>
              <td>UnitPrice</td>
              <td>{props.BondId}</td>
            </tr>
            <tr>
              <td>CouponPercent</td>
              <td>{pet.id}</td>
            </tr>
            <tr>
              <td>BondCurrency</td>
              <td>{pet.id}</td>
            </tr>
            <tr>
              <td>Cusip</td>
              <td>{pet.id}</td>
            </tr>
            <tr>
              <td>FaceValueMn</td>
              <td>{pet.id}</td>
            </tr>
            <tr>
              <td>Issuer_name</td>
              <td>{pet.id}</td>
            </tr>
            <tr>
              <td>BondMaturityDate</td>
              <td>{pet.id}</td>
            </tr>
            </tbody>
            </Table>

        {/* // </div> */}
    </>
  )
};



