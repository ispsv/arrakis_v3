import React, {useState, useEffect} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { getUserBonds } from '../services/BondServices';
import { ExpandedBondDetail } from './ExpandedBondDetail';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const UserBonds = (props) => {
    const [bonds, setBonds] = useState([]);
    const [bondData, setBondData] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc_id');
    const [showPrev, setShowPrev] = useState(false);
    const [showNext, setShowNext] = useState(false);
    const [showToday, setShowToday] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [dateInput, setDateInput] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    useEffect( () => {
        getBondsFromAPI();
    }, []);

    useEffect(() => {
        setCurrentDate(new Date());
    }, []);

    useEffect(() => {
        filterBonds();
    }, [showPrev, showNext, showToday, currentDate]);

    const getBondsFromAPI = ()=>{
        getUserBonds(props.user.userId)
            .then(res => {
                console.log(res.data)
                setBonds(res.data);
                setBondData(res.data);
                sortBondsByAscendingId(res.data)
            })
            .catch(err => {
                setBonds([]);
                console.log(err);
            })
    }

    const handleAlertClose = () => {
        setShowAlert(false);
    };


    const sortBondsByAscendingId = (data) => {
        const sortedBonds = [...data].sort((a, b) => a.bondId - b.bondId);
        setBonds(sortedBonds);
        setSortOrder('asc_id');
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
        filterBonds();
    }

    const handleShowNext = (event) => {
        setShowNext(event.target.checked);
        filterBonds();
    }

    const handleShowToday = (event) => {
        setShowToday(event.target.checked);
        filterBonds();
    }

    const handleDateInputChange = (event) => {
        setDateInput(event.target.value);
    }

    const handleDateSubmit = () => {
        const inputDate = new Date(dateInput);
        if (!isNaN(inputDate)) {
            setShowAlert(true);
            setCurrentDate(inputDate);
            filterBonds(inputDate);
            setTimeout(() => {
                setShowAlert(false);
            }, 3000);
        }
    }

    const handleReset = () => {
        setCurrentDate(new Date());
        setDateInput('');
        filterBonds(new Date());
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);
    }


    const filterBonds = () => {
        const filteredBonds = bondData.filter((bond) => {

            const dateOffset = (24 * 60 * 60 * 1000) * 5;
            const prev5Date = new Date(currentDate - dateOffset);
            const next5Date = new Date(currentDate.getTime() + dateOffset);
            const bondDate = new Date(bond.bondMaturityDate);

            const isPrev = bondDate > prev5Date && bondDate < currentDate;
            const isNext = bondDate < next5Date && bondDate > currentDate;
            const isToday = bondDate.getFullYear() === currentDate.getFullYear() &&
                            bondDate.getMonth() === currentDate.getMonth() &&
                            bondDate.getDate() === currentDate.getDate();


            if (showPrev && showNext && showToday) {
                return isPrev || isNext || isToday;
            } else if (showPrev && showNext) {
                return isPrev || isNext;
            } else if (showPrev && showToday) {
                return isPrev || isToday;
            } else if (showNext && showToday){
                return isNext || isToday;
            } else if (showPrev) {
                return isPrev;
            } else if (showNext) {
                return isNext;
            } else if (showToday) {
                return isToday;
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
                    <h5 style={{ marginLeft: "4.5%", marginTop: "2%", marginBottom: "1%" }}>Your Active Bonds</h5>
                    <span style={{ marginLeft: "20%", textAlign: "left", marginTop: "1.25%" }}>

                    <div className="d-flex align-items-center"> {/* Flex container */}
                        <Form.Control
                            type="date"
                            value={dateInput}
                            onChange={handleDateInputChange}
                            style={{ marginRight: "10px", width: "150px" }}
                        />
                        <Button variant="primary" onClick={handleDateSubmit} style={{ marginRight: "10px" }}>Change Date</Button>
                        <Button variant="secondary" onClick={handleReset}>Reset</Button>
                    </div></span>


                    <span style={{ marginLeft: "4%", textAlign: "left", marginTop: "0.05%" }}>
        <Form.Check
            type="checkbox"
            label="Matured in Previous 5 Days"
            checked={showPrev}
            onChange={handleShowPrev}
            style={{ marginRight: "10px" }}
        />
        <Form.Check
            type="checkbox"
            label="Matures in Next 5 Days"
            checked={showNext}
            onChange={handleShowNext}
            style={{ marginRight: "10px" }}
        />
        <Form.Check
            type="checkbox"
            label="Matures Today"
            checked={showToday}
            onChange={handleShowToday}
            style={{ marginRight: "10px" }}
        />
      </span>

                    <Dropdown style={{ marginTop: "1%", marginRight: "0%" }}>
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
                </div>
            </div>

            <div style={{ position: "relative" }}>
                <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible style={{ marginTop: '1%', position: "absolute", right: 0, zIndex: 9999 }}>
                    Date changed successfully!
                </Alert>
            </div>

            <h4 style={{ marginLeft: "4.5%", marginTop: "2%", marginBottom: "1%" }}> Total count is: <small className="text-body-secondary">{bonds.length}</small></h4>
            <Container fluid style={{marginLeft: "3%", marginTop: "2%", width: "95%", marginRight: "2%"}} >
                <Row>
                    {bonds.map(bond => (
                        <Col md={6} lg={4} xl={3} key={bond.bondId.toString()} style={{ marginBottom: "20px" }}>
                            <div className='container'>
                                <ExpandedBondDetail info={bond} />
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>

    )



}

export default UserBonds;