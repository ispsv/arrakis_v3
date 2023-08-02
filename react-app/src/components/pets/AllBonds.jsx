import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BondDetail } from "./BondDetail";
import { getAllBonds } from '../../services/PetServices';
import Button from 'react-bootstrap/Button';

const AllBonds = () => {
  const [Bonds, setBonds] = useState([]);

  useEffect( () => {
    getBondsFromAPI();
  }, []);
  
  const getBondsFromAPI = ()=>{
    getAllBonds()
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
          <h5 style={{marginLeft: "4.5%", marginTop: "1%"}}>All Active Bonds</h5>
          <Button variant="primary" className="btn btn-secondary" id="sort">Sort</Button>
        </div>
      </div>
    <h4 style={{marginLeft: "4.5%", marginTop:"2%", marginBottom: "1%"}}> Total count is: <small className="text-body-secondary">{Bonds.length}</small></h4>

    <Container fluid="md-4" style={{marginLeft: "4%", marginTop: "2%", width: "95%"}} >
    {/* <Row xs={4}> */}
    <Row md={5}>
    {Bonds.map(bond => (
      <Col>
      <div className='container' key={bond.id.toString()}>
        <BondDetail info={bond}/>
      </div></Col>
     ))}
    </Row></Container>
  </>
    
    // { Bonds.map(bond=> 
    // <>
    // // <div className={styles.Bonds}>
    //   <h4> Total count is: <small className="text-body-secondary">{Bonds.length}</small></h4>
    //   <Container xs={2}>
    //     <Row >
    //     <Col>
    //       <BondDetail/>
    //     </Col>
    //   </Row>
    //   </Container>

    //   // </div> 
    //   </>
    //   ) 
    //   }
   
  )
}

export default AllBonds