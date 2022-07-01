import React from "react";
import { Button, Spinner } from "react-bootstrap";


function LoadingScreen(props) {
return (
    <>
        <Button 
        variant="primary" disabled
        style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)'
        }}>
            <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            />
            Loading...
        </Button>
  </>
);
};

export default LoadingScreen;