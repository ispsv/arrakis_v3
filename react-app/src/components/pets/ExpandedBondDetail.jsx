import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React, {useState, useEffect, Fragment} from 'react';
import { useNavigate } from 'react-router-dom';
import ViewBond from './ViewBond';
// import { ViewBond } from "./ViewBond";

export const ExpandedBondDetail = (props) => {
  // const[,viewBond] = useState([]);

  // Colour of statue and maturity dates
  const bondMaturityDate = new Date(props.info.bondMaturityDate);
  const status = new String(props.info.status);
  const currentDate = new Date();
  const active = "active"
  const isDateBeforeCurrentDate = bondMaturityDate < currentDate;
  const isActive = status == active;
  // View bond data collection
    const navigate = useNavigate();

  return (
    <Fragment>
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
          <span className={isActive ? "text-success" : "text-success"}>
            {props.info.status}
          </span>
        </Card.Text>
           <Card.Text className="card-text"><Button variant="primary" onClick={() => {navigate(`/bonds/${props.info.bondId}`)}} className="btn btn-secondary">View</Button></Card.Text>

      
          
        </Card.Body>
      </Card>
      
      {/* <Routes>
        <Route path={`/bonds/${bond_id}`} element={<ViewBond info={bond_id}/>} />
      </Routes>  */}
    </Fragment>
  )
};


      {/* <Route path="allbonds" element={<Pets />} /> */}
      {/* <Route path={viewBondURL} element={bond_id && <ViewBond info={bond_id} />}/> */}
    