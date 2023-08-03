import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { ViewBond } from "./ViewBond";

export const ExpandedBondDetail = (props) => {

  // Colour of statue and maturity dates
  const bondMaturityDate = new Date(props.info.bondMaturityDate);
  const status = new String(props.info.status);
  const currentDate = new Date();
  const active = "active"
  const isDateBeforeCurrentDate = bondMaturityDate < currentDate;
  const isActive = status == active;

  // View bond data collection
  const viewBondURL = `/viewbond/${props.info.bondId}`;

  return (
          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {props.info.bondId}</div>
          </Card.Title>
          <Card.Body className="card-body">
          <Card.Text className="card-text"> Bond Holder Name: {props.info.bondHolderName}</Card.Text>
          <Card.Text className="card-text">
          <span>Bond Maturity Date: </span>
          <span className={isDateBeforeCurrentDate ? "text-danger" : ""}>
            {props.info.bondMaturityDate}
          </span>
        </Card.Text>
          <Card.Text className="card-text"> Bond Type: {props.info.type}</Card.Text>
          <Card.Text className="card-text">
        <span>Status: </span>
          <span className={isActive ? "text-success" : ""}>
            {props.info.status}
          </span>
        </Card.Text>
          <Card.Text className="card-text"><Link to={viewBondURL}><Button variant="primary" className="btn btn-secondary">View</Button></Link></Card.Text>
          
        </Card.Body>
      </Card>
  )
};
