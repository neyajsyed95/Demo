import React, {useState, useEffect}from 'react'
import { Row,Col,Container  } from 'react-bootstrap';
const itemsPerPage = 3;

const Blogpagi = () => {
    const [data,setData] = useState([])
const [currentPage, setCurrentPage] = useState(1);

useEffect(()=>{
    fetData()
},[])

const fetData = async()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const result = await response.json()
    setData(result)
    // console.log('result',result)
}

const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

const handlePaginationClick = (pageNumber) => setCurrentPage(pageNumber);

const handlePrevClick = () => {
    setCurrentPage((prevPage) => prevPage - 1);
};

const handleNextClick = () => {
    setCurrentPage((prevPage) => prevPage + 1);
    console.log("dd",currentPage)
};

return (
    <section className='blogs'>
    <Container>
    <h2>Blog part is start from here</h2>
    
    <div>
    <Row>
     {currentData.map((item) => (
        <Col sm={4} className='ddd'>
        <div key={item.id}>
         <h3>{item.title}</h3>
         <p>{item.body}</p>
        </div>
        </Col>
     ))}
     
     <div>
     
        <button disabled={currentPage === 1} onClick={handlePrevClick}>
         Prev
        </button>
        {Array(Math.ceil(data.length / itemsPerPage))
         .fill()
         .map((_, index) => (
            <button
             key={index}
             onClick={() => handlePaginationClick(index + 1)}
             className={currentPage === index + 1 ? "active" : ""}
            >
             {index + 1}
            </button>
         ))}
        <button
         disabled={currentPage === Math.ceil(data.length / itemsPerPage)}
         onClick={handleNextClick}
        >
         Next
        </button>
        
     </div>
     </Row>
     
    </div>
    
    </Container>
    </section>
);
};

export default Blogpagi;