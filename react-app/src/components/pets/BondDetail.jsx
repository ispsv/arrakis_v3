import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';

export const BondDetail = (props) => {
    // const [pets, setPets] = useState([]);

    // useEffect(() => {
    //   getAllBonds()
    //         .then(({data}) => {
    //         setPets(data);
    //         });
    // }, []);
  return (

          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {props.info.id}</div>
          </Card.Title>
          <Card.Body className="card-body">
          <Card.Text className="card-text text-danger"> Bond Maturity Date: {props.info.name}</Card.Text>
          <Card.Text className="card-text"> Bond Type: {props.info.age}</Card.Text>
          <Card.Text className="card-text"> Status: {props.info.age}</Card.Text>
        </Card.Body>
      </Card>
  )
};
