import React, {useState} from "react";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit';
import Badge from 'react-bootstrap/Badge';
import { MDBBtn } from 'mdb-react-ui-kit';
//import ToggleButton from 'react-toggle-button'


function RestaurantCard(props) {
  const [state, setState] = React.useState(props.state1)

  return (   
    <>    
       <MDBCol>
          <MDBCard className='h-100'>
            <MDBCardImage
              src={props.src1}
              alt='...'
              position='top'
            />
            <MDBCardBody className="text-center">








              <MDBCardTitle>
                <a href={props.href1}>{props.restaurantName}   </a></MDBCardTitle>
                {/* <div onClick={setState(!state)}>
                    {state ? <Badge bg="success" className="justify-content-end">Liked</Badge> : <Badge bg="secondary" className="justify-content-end">Not Liked</Badge>}
                </div> */}
                <Badge bg="success" className="justify-content-end">Liked</Badge>




            </MDBCardBody>
          </MDBCard>
        </MDBCol>
    </>
    );
}

export default RestaurantCard;