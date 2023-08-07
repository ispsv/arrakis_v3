// import React, { useState, useEffect } from "react";

import Card from 'react-bootstrap/Card';

export const BondDetail = (props) => {
    const bondMaturityDate = new Date(props.info.bondMaturityDate);
    const status = new String(props.info.status);
    const currentDate = new Date();
    const active = "active"

    const isDateBeforeCurrentDate = bondMaturityDate < currentDate;
    const isActive = status == active;
  return (

          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {props.info.bondId}</div>
          </Card.Title>
          <Card.Body className="card-body">
          <Card.Text className="card-text">
          <span><strong>Bond Maturity Date:</strong><br></br> </span>
          <span className={isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
            {props.info.bondMaturityDate}
          </span>
        </Card.Text>
          <Card.Text className="card-text"> <strong>Bond Type:</strong> <br></br> {props.info.type}</Card.Text>
          <Card.Text className="card-text">
        <span><strong>Status:</strong> <br></br> </span>
          <span className={isActive && isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
            {props.info.status}
          </span>
        </Card.Text>
        </Card.Body>
      </Card>
  )
};
