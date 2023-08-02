import React, { useState, useEffect } from "react";
import { getAllBonds } from "../../services/PetServices";
import styles from "./Pets.module.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export const ExpandedBondDetail = (props) => {
  return (
          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {props.info.id}</div>
          </Card.Title>
          <Card.Body className="card-body">
          <Card.Text className="card-text"> Bond Holder Name: {props.info.name}</Card.Text>
          <Card.Text className="card-text text-danger"> Bond Maturity Date: {props.info.name}</Card.Text>
          <Card.Text className="card-text"> Bond Type: {props.info.age}</Card.Text>
          <Card.Text className="card-text"> Status: {props.info.age}</Card.Text>
          <Card.Text className="card-text"><Button variant="primary" className="btn btn-secondary">View</Button></Card.Text>
          
        </Card.Body>
      </Card>
  )
};
