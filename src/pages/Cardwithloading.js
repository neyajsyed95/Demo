import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import ClipLoader from "react-spinners/ClipLoader";


function Card() {
    let [loading, setLoading] = useState(true);
    const [userData, setUserData] = useState([])
    const [visibleCards, setVisibleCards] = useState(3);

    useEffect(() => {
        handleFetchData()
    }, [])

    const handleFetchData = async () => {
        const response = await fetch('https://dummyjson.com/products')
        const result = await response.json()
        setUserData(result)
        console.log('result', result)
    }
    const handleLoadMore = () => {
        setVisibleCards(visibleCards + 3);
    };



    return (
        <div className='sdd'>

            <Container>
                <h2>Products part is start from here</h2>
                <Row>
                    {userData.products ? userData.products.slice(0, visibleCards).map((user) => (

                        <Col sm={4} className='list'>
                            <img src={user.images[0]}></img>
                            <h4>{user.brand}</h4>
                            <h1>{user.category}</h1>
                            <p>{user.description}</p>
                        </Col>


                    )) : <div>
                        <ClipLoader
                            color="#333"
                            loading={loading}
                            // cssOverride={override}
                            size={150}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
                    }

                </Row>
                <button onClick={handleLoadMore} className='btns'>Load More</button>
            </Container>


        </div>
    );
}

export default Card;