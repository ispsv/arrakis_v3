import React, { useState, useEffect } from "react";
import { getAllBonds } from "../../services/PetServices";
import styles from "./Pets.module.css";
import Card from 'react-bootstrap/Card';

export const BondDetail = () => {
    const [pets, setPets] = useState([]);

    useEffect(() => {
      getAllBonds()
            .then(({data}) => {
            setPets(data);
            });
    }, []);
  return (
    <>
        { pets.map(pet => 
        <div className={styles.pets}>
        
          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {pet.id}</div>
          </Card.Title>
          <Card.Body className="card-body">
          <Card.Text className="card-text text-danger"> Bond Maturity Date: {pet.name}</Card.Text>
          <Card.Text className="card-text"> Bond Type: {pet.age}</Card.Text>
          <Card.Text className="card-text"> Status: {pet.age}</Card.Text>
        </Card.Body>
      </Card>
      </div>) 
        }
    </>
  )
};
