import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect, Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import { getTradesDetails } from '../../services/BondServices';
import ViewBond from './ViewBond';
// import { ViewBond } from "./ViewBond";

export const ExpandedBondDetail = (props) => {
  const [bookDetails, setBookDetails] = useState([]);

  // Colour of statue and maturity dates
  const bondMaturityDate = new Date(props.info.bondMaturityDate);
  const status = new String(props.info.status);
  const currentDate = new Date();
  const active = "active"
  const isDateBeforeCurrentDate = bondMaturityDate < currentDate;
  const isActive = status == active;
  const bondId = props.info.bondId;
  // View bond data collection
  const navigate = useNavigate();

  useEffect(() => {
    getTradesDetails(bondId)
    .then(res2 => {
      const bookSet = new Set()
      console.log(bondId);
      console.log(res2.data);
      for (let i = 0; i < res2.data.length; i++) {
        bookSet.add(res2.data[i].book.bookName);
      }
      setBookDetails(Array.from(bookSet));
    })
    .catch(err => {
      setBookDetails([]);
        console.log(err);
    })
  }, [bondId]);

  return (
    <Fragment>
          <Card className="card bg-secondary mb-3 text-center">
          <Card.Title className="card-header"> 
          <div>Bond ID: {props.info.bondId}</div>
          </Card.Title>
          <Card.Body className="card-body">
          <Card.Text className="card-text">
            <span><strong>Client: </strong></span><br></br>
            <span> {props.info.bondHolder} </span>
          </Card.Text>
          <div><strong>Book name(s): </strong>
            {bookDetails.map((book, index) => (
              <Card.Text className="card-text">
                <span>
                  {book}
                </span>
              </Card.Text>
            ))}
          </div>
          <br></br>
          <Card.Text className="card-text">
            <span><strong>Bond Maturity Date: </strong><br></br></span>
            <span className={isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
              {props.info.bondMaturityDate}
            </span>
          </Card.Text>
          <Card.Text className="card-text"><strong>Bond Type: </strong><br></br>{props.info.type}</Card.Text>
          <Card.Text className="card-text">
            <span><strong>Status: </strong><br></br></span>
            <span className={isActive && isDateBeforeCurrentDate ? "text-danger" : "text-success"}>
              {props.info.status}
            </span>
          </Card.Text>
           <Card.Text className="card-text"><Button variant="primary" onClick={() => {navigate(`/bonds/${props.info.bondId}`)}} className="btn btn-secondary">View</Button></Card.Text>

      
          
        </Card.Body>
      </Card>
    </Fragment>
  )
};
    