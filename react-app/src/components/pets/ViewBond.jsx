import React, { useState, useEffect } from "react";
import { getBondDetails, getTradesDetails} from "../../services/BondServices";
import Table from 'react-bootstrap/Table';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../../App.css';

const ViewBond = () => {
  const { bondId } = useParams();
  const [bondDetails, setBondDetails] = useState({});
  const [tradeDetails, setTradesDetails] = useState({});
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
    })
    // Fetch trade details using bondId
    getTradesDetails(bondId)
    .then(res => {
      console.log(res.data)
      setTradesDetails(res.data);
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
          <h5 style={{marginLeft: "4.5%", marginTop: "1%"}}>Bond: {bondDetails.bondId}</h5>
          
        </div>
      </div>
      <Container fluid="md-4" style={{marginLeft: "4%", marginTop: "2%", width: "93%"}}>
          <Table className="table-light" >
            <thead>
              <tr>
                <th>ISIN</th>
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
                <td>{bondDetails.isin}</td>
                <td>{bondDetails.type}</td>
                <td>{bondDetails.issuerName}</td>
                <td>{bondDetails.bondMaturityDate}</td>
                <td>{bondDetails.faceValueMn}</td>
                <td>{bondDetails.currency}</td>
                <td>{bondDetails.couponPercent}</td>
                <td>{bondDetails.status}</td>
              </tr>
            </tbody>
          </Table>
        </Container>
        <div className="list-group text-center">
        <div className="d-flex justify-content-between subnav">
          <h5 style={{marginLeft: "4.5%", marginTop: "2%"}}>Trades for Bond {bondDetails.bondId}</h5>
        </div>
      </div>
        <Container fluid="md-4" style={{marginLeft: "4%", marginTop: "2%", width: "93%"}} >
            <Table className="table-light" >
            <thead>
              <tr>
              <th>Trade Id</th>
                <th>ISIN</th>
                <th>Book Id</th>
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
              <tr>
                <td>{tradeDetails.isin}</td>
                <td>{tradeDetails.isin}</td>
                <td>{tradeDetails[0].bookId}</td>
                <td>{bondDetails.bondId}</td>
                <td>{tradeDetails.status}</td>
                <td>{tradeDetails.quantity}</td>
                <td>{tradeDetails.bondId}</td>
                <td>{tradeDetails.bondId}</td>
                <td>{tradeDetails.bondId}</td>
                <td>{tradeDetails.bondId}</td>
              </tr>
            </tbody>
            </Table>
            </Container>

        

    </>
  )
};



export default ViewBond;