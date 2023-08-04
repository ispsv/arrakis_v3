import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { BondDetail } from "./BondDetail";
import { getAllBonds } from '../../services/BondServices';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';


const AllBonds = () => {
    const [bonds, setBonds] = useState([]);
    const [bondData, setBondData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc_id');
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false);

    useEffect(() => {
        getBondsFromAPI();
    }, []);

    useEffect(() => {
        filterBonds();
    }, [showPrev, showNext]);


    const getBondsFromAPI = () => {
        getAllBonds()
            .then(res => {
                console.log(res.data)
                setBonds(res.data);
                setBondData(res.data);
            })
            .catch(err => {
                setBonds([]);
                console.log(err);
            })
    }



    const handleSortClick = (order) => {

        const sortedBonds = [...bonds].sort((a, b) => {
            if (order === 'asc_id') {
                return a.bondId - b.bondId;
            } else if (order === 'desc_id') {
                return b.bondId - a.bondId;
            } else if (order === 'asc_date') {
                return new Date(a.bondMaturityDate) - new Date(b.bondMaturityDate);
            } else if (order === 'desc_date') {
                return new Date(b.bondMaturityDate) - new Date(a.bondMaturityDate);
            } else if (order === 'type') {
            return a.type.localeCompare(b.type);}
            return 0;
        });

        setBonds(sortedBonds);
        setSortOrder(order);
    }

    const handleShowPrev = (event) => {
        setShowPrev(event.target.checked);
        filterBonds()
    }

    const handleShowNext = (event) => {
        setShowNext(event.target.checked);
        filterBonds()
    }

    const filterBonds = () => {


        const filteredBonds = bondData.filter((bond) => {
            const dateOffset = (24*60*60*1000) * 5;
            const currentDate = new Date();
            const prev5Date = new Date(currentDate - dateOffset);
            const next5Date = new Date(currentDate + dateOffset)

            const bondDate = new Date(bond.bondMaturityDate);

            const isPrev = bondDate > prev5Date && bondDate < currentDate;
            const isNext = bondDate < next5Date && bondDate > currentDate;

            if (showPrev && showNext) {
                return isPrev || isNext;
            } else if (showPrev) {
                return isPrev;
            } else if (showNext) {
                return isNext;
            } else {
                return true;
            }
        });

        setBonds(filteredBonds);
    }





    return (
        <>
            <div className="list-group text-center">
                <div className="d-flex justify-content-between subnav">
                    <h5 style={{ marginLeft: "4.5%", marginTop: "1%" }}>All Active Bonds</h5>
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" className="btn btn-secondary" id="sort">
                            Sort: {sortOrder === 'asc_id'
                            ? 'Ascending ID'
                            : sortOrder === 'desc_id'
                                ? 'Descending ID'
                                : sortOrder === 'asc_date'
                                    ? 'Ascending Date'
                                    : sortOrder === 'desc_date'
                                        ? 'Descending Date'
                                        : 'Bond Type'}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => handleSortClick('asc_id')}>Ascending ID</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortClick('desc_id')}>Descending ID</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortClick('asc_date')}>Ascending Date</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortClick('desc_date')}>Descending Date</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleSortClick('type')}>Bond Type</Dropdown.Item>

                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Check
                        type="checkbox"
                        label="Previous 5 Days"
                        checked={showPrev}
                        onChange={handleShowPrev}
                        style={{ marginLeft: "10px" }}
                    />
                    <Form.Check
                        type="checkbox"
                        label="Next 5 Days"
                        checked={showNext}
                        onChange={handleShowNext}
                        style={{ marginLeft: "10px" }}
                    />
                </div>
            </div>
            <h4 style={{ marginLeft: "4.5%", marginTop: "2%", marginBottom: "1%" }}> Total count is: <small className="text-body-secondary">{bonds.length}</small></h4>
            <Container fluid="md-4" style={{ marginLeft: "4%", marginTop: "2%", width: "95%" }} >
                <Row md={5}>
                    {bonds.map(bond => (
                        <Col key={bond.bondId.toString()}>
                            <div className='container'>
                                <BondDetail info={bond} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default AllBonds;
