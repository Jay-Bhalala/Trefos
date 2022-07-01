import React from "react";
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import img1 from '../pages/marker.png';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Liked(props) {
  // return (
  //   <>
  //     <h1 className="text-center text-success my-5"> Hi </h1>
  //     <div className="container">
  //       <div className="row">
  //         <div className="col-md-3">
  //           <Card style={{ width: '18rem' }}>
  //             <Card.Img variant="top" src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400" />
  //             <Card.Body>
  //               <Card.Title>Restaurant 1</Card.Title>
  //               <Card.Text>
  //                 Some quick example text to build on the card title and make up the bulk of
  //                 the card's content.
  //               </Card.Text>
  //               <Button variant="primary">Favorite</Button>
  //             </Card.Body>
  //           </Card>
  //         </div>

  //         <div className="col-md-3">
  //           <Card style={{ width: '18rem' }}>
  //             <Card.Img variant="top" src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400" />
  //             <Card.Body>
  //               <Card.Title>Resturant 2</Card.Title>
  //               <Card.Text>
  //                 Some quick example text to build on the card title and make up the bulk of
  //                 the card's content.
  //               </Card.Text>
  //               <Button variant="primary">Favorite</Button>
  //             </Card.Body>
  //           </Card>
  //         </div>

  //         <div className="col-md-3">
  //           <Card style={{ width: '18rem' }}>
  //             <Card.Img variant="top" src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400" />
  //             <Card.Body>
  //               <Card.Title>Resturant 3</Card.Title>
  //               <Card.Text>
  //                 Some quick example text to build on the card title and make up the bulk of
  //                 the card's content.
  //               </Card.Text>
  //               <Button variant="primary">Favorite</Button>
  //             </Card.Body>
  //           </Card>
  //         </div>

  //         <div className="col-md-3">
  //           <Card style={{ width: '18rem' }}>
  //             <Card.Img variant="top" src="https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400" />
  //             <Card.Body>
  //               <Card.Title>Resturant 4</Card.Title>
  //               <Card.Text>
  //                 Some quick example text to build on the card title and make up the bulk of
  //                 the card's content.
  //               </Card.Text>
  //               <Button variant="primary">Favorite</Button>
  //             </Card.Body>
  //           </Card>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
  return (
    <div className="liked container">
      <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Restaurant 1</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Restaurant 2</MDBCardTitle>
              <MDBCardText>This is a short card.</MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Restaurant 3</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src='https://images.pexels.com/photos/370984/pexels-photo-370984.jpeg?auto=compress&cs=tinysrgb&w=400'
              alt='...'
              position='top'
            />
            <MDBCardBody>
              <MDBCardTitle>Restaurant 4</MDBCardTitle>
              <MDBCardText>
                This is a longer card with supporting text below as a natural lead-in to additional content.
                This content is a little bit longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>

  );
}

export default Liked;