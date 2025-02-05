import React, { useState, useEffect } from "react";
import { getBondDetails, getTradesDetails} from "../services/BondServices";
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import '../App.css';

const ViewBond = () => {
  const { bondId } = useParams();
  const [bondDetails, setBondDetails] = useState({});
  const [tradesDetails, setTradesDetails] = useState([]);
  const bondMaturityDate = new Date(bondDetails.bondMaturityDate);
  const status = new String(bondDetails.status);
  const statusTrade = new String(tradesDetails.status);
  const currentDate = new Date();
  const active = "active"
  const open = "open"
  const isDateBeforeCurrentDate = bondMaturityDate < currentDate;
  const isActive = status == active;
  const isOpen = statusTrade != open;
  useEffect(() => {
    // Fetch bond details using bondId
    getBondDetails(bondId)
    .then(res => {
      console.log(res.data)
      setBondDetails(res.data);
    })
    .catch(err => {
      setBondDetails([]);
        console.log(err);
    });
    // Fetch trade details using bondId
    getTradesDetails(bondId)
    .then(res2 => {
      console.log(bondId);
      console.log(res2.data);
      setTradesDetails(res2.data);
    })
    .catch(err => {
      setTradesDetails([]);
        console.log(err);
    })
    
  }, [bondId]);
  return (
    <>
    <div className="list-group text-center">
        <div className="d-flex justify-content-between subnav">
          <h5 style={{marginLeft: "4.5%", marginTop: "1%"}}>Bond {bondDetails.bondId} Details:</h5>
          
        </div>
      </div>
      <Container fluid="md-4" style={{marginLeft: "4%", marginTop: "2%", width: "93%"}}>
          <Table className="table-light table table-hover" >
            <thead>
              <tr>
                <th>ISIN</th>
                <th>CUSIP</th>
                <th>Type</th>
                <th>Issuer</th>
                <th>Maturity</th>
                <th>Face Value</th>
                <th>Currency</th>
                <th>Coupon %</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>{bondDetails.isin}</strong></td>
                <td>{bondDetails.cusip}</td>
                <td>{bondDetails.type}</td>
                <td>{bondDetails.issuerName}</td>
                <td>
                  <span className={isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
                  <strong>{bondDetails.bondMaturityDate}</strong>
                  </span>
                  </td>
                <td>{bondDetails.faceValueMn}</td>
                <td>{bondDetails.currency}</td>
                <td>{bondDetails.couponPercent}</td>
                <td>
                  <span className={isActive && isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
                  <strong>{bondDetails.status}</strong>
                  </span>
                  </td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <div className="list-group text-center">
        <div className="d-flex justify-content-between subnav">
          <h5 style={{marginLeft: "4.5%", marginTop: "2%"}}>Trade(s) for Bond {bondDetails.bondId}:</h5>
        </div>
      </div>
    <Container fluid="md-4" style={{marginLeft: "4%", marginTop: "2%", width: "93%"}} >
      <Table className="table-light table table-hover" >
      <thead>
        <tr>
        <th>Trade Id</th>
          <th>Book Name</th>
          <th>Client</th>
          <th>Status</th>
          <th>Quantity</th>
          <th>Unit Price</th>
          <th>Currency</th>
          <th>Buy/Sell</th>
          <th>Trade Date</th>
          <th>Settlement Date</th>
        </tr>
      </thead>
      <tbody>
      {tradesDetails.map((trade, index) => (
    <tr key={index}>
      <td>{trade.tradeId || "-"}</td>
      <td>{trade.book.bookName || "-"}</td>
      <td>{trade.bond.bondHolder || "-"}</td>
      <td>
        <span className={isOpen && isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
          <strong>{trade.status || "-"}</strong>
        </span>
      </td>
      <td>{trade.quantity || "-"}</td>
      <td>{trade.unitPrice || "-"}</td>
      <td>{trade.currency || "-"}</td>
      <td>{trade.type || "-"}</td>
      <td>{trade.date || "-"}</td>
      <td>{trade.settlementDate || "-"}</td>
    </tr>
  ))}
      </tbody>
      </Table>
      </Container>
    
    </>
  )
};



export default ViewBond;