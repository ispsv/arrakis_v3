// import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';

export const BondDetail = (props) => {
    // const [pets, setPets] = useState([]);

    // useEffect(() => {
    //   getAllBonds()
    //         .then(({data}) => {
    //         setPets(data);
    //         });
    // }, []);
    const bondMaturityDate = new Date(props.info.bondMaturityDate);
    const currentDate = new Date();

    const isDateBeforeCurrentDate = bondMaturityDate < currentDate;
  return (

          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {props.info.bondId}</div>
          </Card.Title>
          <Card.Body className="card-body">
          {/* <Card.Text className="card-text text-danger"> Bond Maturity Date: {props.info.bondMaturityDate}</Card.Text> */}
          <Card.Text>
          <span>Bond Maturity Date: </span>
          <span className={isDateBeforeCurrentDate ? "text-danger" : ""}>
            {props.info.bondMaturityDate}
          </span>
        </Card.Text>
          <Card.Text className="card-text"> Bond Type: {props.info.type}</Card.Text>
          <Card.Text className="card-text"> Status: {props.info.status}</Card.Text>
        </Card.Body>
      </Card>
  )
};
