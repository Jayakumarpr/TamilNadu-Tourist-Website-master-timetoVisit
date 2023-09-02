

import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Table from 'react-bootstrap/Table';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Data from '../Data.json';
import '../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

const Packages = () => {

  const [currentPage, setCurrentPage] = useState(1)

  const recordsPerPage = 9;

  const lastIndex = currentPage * recordsPerPage;

  const firstIndex = lastIndex - recordsPerPage;

  const records = Data.slice(firstIndex, lastIndex);

  const npage = Math.ceil(Data.length / recordsPerPage);

  const numbers = [...Array(npage + 1).keys()].slice(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <Container className='mt-5' >
        <Row>
        <Col lg={6}>
        <h2>How packages work in Tamil Nadu Tourism??</h2>
        <p style={{textIndent:'3rem', textAlign:'justify'}} className='mt-4'>
            Tamil Nadu, the land of 33, 000 temples, is one of the popular Tourist Places in India and it boasts the largest tourism industry in India. Tamil Nadu is renowned for its temple towns and heritage sites, hill stations, waterfalls, national parks, local cuisine and the fabulous wildlife and scenic beauty. Typically, 3-4 days is required to explore best Tamilnadu Tourism Packages. Chennai, Rameshwaram, Madurai, Hogenakkal, Theni, Yercaud, Kanyakumari,  and kumbakonam are the top Tamilnadu Tourist Places. Besides, pristine beauty of hill stations like Ooty and Kodaikanal leaves the visitors mesmerized with its irresistible charm.
        </p>
        <p>
        {/* Explore our <a href='../#home'> Tamilnadu Tourism</a> guide for complete details. */}
        </p>
        </Col>
        <Col lg={6}>
            <img src={require('../assets/Home/banner.1.jpg')} alt='tn img' width={'100%'} />
        </Col>
        </Row>
        <h6 className='my-5 text-success'>Note : In all packages FOOD and ACCOMODATION included</h6>

        <h3 className='mt-5 text-center'>Best Tour Packages Offered to You!</h3>
        <h6 className='mt-2 text-muted text-center'>Choose your next Destintion</h6>

        <Table striped bordered hover className='mt-5'>
      <thead>
        <tr>
        <th className='text-center'>Package</th>
          <th className='text-center'>Duration</th>
          <th className='text-center'>Starting Price</th>
          <th className='text-center'>Details</th>
        </tr>
      </thead>
      <tbody>
        {records.map((data,index) => (
             <tr key={index}>
             <td className='text-center '>{data.Package}</td>
             <td className='text-center'>{data.Duration}</td>
             <td className='text-center'> &#8377; {data.Price} per person </td>
             <td className='text-center'>
            <button style={{backgroundColor:"grey", border:'none'}} className='rounded-5 button px-3'
            onClick={handleShow}>
              View Details
            </button>
             </td>
           </tr>
        ))}
       <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Would you like to travel with us</Modal.Title>
        </Modal.Header>
        <Modal.Body>You will be visiting all <a href='../#home'>these places</a> in your trip <br /> <br />
        For more details you can contact us <br /> <br /> abc@gmail.com </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
        
      </tbody>
    </Table>

    <nav className=' d-flex justify-content-center my-5'>
      <ul className='pagination'>
          <li>
            <a href='#' className='page-link'
            onClick={prevPage}>Prev</a>
          </li>
          {
            numbers.map((n,i) =>(
              <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                <a className='page-link'
                onClick={ () => changeCurrentPage(n)}>{n}</a>
              </li>
            ))
          }
          <li>
            <a href='#' className='page-link'
            onClick={nextPage}
            style={{cursor:'pointer'}}
            >Next</a>
          </li>
      </ul>
    </nav>

    <section>
      <h3 className="section-header text-center">
        Testimonials  </h3>
         <p className='text-center text-muted'>What people say about us</p>
        

        <div className="testimonials my-5 cardpack">
          <Row className='mt-5'>
            <Col lg={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Gallery/pro pic.webp')} />
      <Card.Body>
        <Card.Title>card</Card.Title>
        <Card.Text>
        Overall experience is good, better or best.
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={require('../Gallery/pro pic.webp')} />
      <Card.Body>
        <Card.Title>card</Card.Title>
        <Card.Text>
        The trip was properly arranged and coordinated! 
        </Card.Text>
        <Button variant="primary">Book Now</Button>
      </Card.Body>
    </Card>
    </Col>
    <Col lg={4}>
    <Card style={{ width: '18rem' }} className='d-flex'>
      <Card.Img variant="top" src={require('../Gallery/pro pic.webp')} />
      <Card.Body>
        <Card.Title>card </Card.Title>
        <Card.Text>
        We had a very nice trip in Tamil Nadu with all the facilities in hotel.
        </Card.Text>
        <Button variant="primary" >Book Now</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>
        </div>
    </section>


</Container>

)
function prevPage() {
    if(currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== npage) {
      setCurrentPage(currentPage + 1)
    }
  }
}

export default Packages