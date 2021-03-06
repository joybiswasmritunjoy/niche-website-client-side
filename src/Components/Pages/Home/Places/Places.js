import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Place from './place/Place';
import "./Places.css"

const Places = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
        fetch('https://vast-escarpment-72434.herokuapp.com/products?home=6')
            .then(res => res.json())
            .then(data=>setPlaces(data))
    },[])
    return (
        <Container id="spot" className="my-4">
            <h2 className="fs-1 fw-bold text-center"><span style={{color:'red'}}>Explore</span> Your Dream</h2>
            <Row className="row">
            {
                places.map(place=><Place place={place} key={place._id}></Place>)
            }
            </Row>
        </Container>
    );
};

export default Places;