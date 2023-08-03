import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { getUserBonds } from '../../services/BondServices';
// import styles from "./Pets.module.css";
import Button from 'react-bootstrap/Button';
import { ExpandedBondDetail } from './ExpandedBondDetail';

const UserBonds = () => {
  const [Bonds, setBonds] = useState([]);

  useEffect( () => {
    getBondsFromAPI();
  }, []);
  
  const getBondsFromAPI = ()=>{
    getUserBonds()
    .then(res => {
        console.log(res.data)
        setBonds(res.data);
    })
    .catch(err => {
        setBonds([]);
        console.log(err);
    })
  }

  return (
    <>
    <div className="list-group text-center">
        <div className="d-flex justify-content-between subnav">
          <h5 style={{marginLeft: "4.5%", marginTop: "1%"}}>Your Active Bonds</h5>
          <Button variant="primary" className="btn btn-secondary" id="sort">Sort</Button>
        </div>
      </div>
    <h4 style={{marginLeft: "4.5%", marginTop:"2%", marginBottom: "1%"}}> Total count is: <small className="text-body-secondary">{Bonds.length}</small></h4>

    <Container fluid="md-4" style={{marginLeft: "4%", marginTop: "2%", width: "95%"}} >
    <Row md={5}>
    {Bonds.map(bond => (
      <Col>
      <div className='container' key={bond.bondId.toString()}>
        <ExpandedBondDetail info={bond}/>
      </div></Col>
     ))}
    </Row></Container>
  </>
   
  )
}

export default UserBonds;
