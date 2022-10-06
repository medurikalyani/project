import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddRoomModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:24396/api/roommanagement",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RoomNo:event.target.RoomNo.value,
                Facilities:event.target.Facilities.value,
                No_Of_Adults:event.target.No_Of_Adults.value,
                RoomTypeId:event.target.RoomTypeId.value
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }
    render(){
        return (
            <div className="container">

<Modal
{...this.props}
size="lg"
aria-labelledby="contained-modal-title-vcenter"
centered
>
    <Modal.Header clooseButton>
        <Modal.Title id="contained-modal-title-vcenter">
            Add Facilities
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="RoomNo">
                        <Form.Label>RoomNo</Form.Label>
                        <Form.Control type="text" name="RoomNo" required 
                        placeholder="RoomNo"/>
                    </Form.Group>

                    <Form.Group controlId="Facilities">
                        <Form.Label>Facilities</Form.Label>
                        <Form.Control type="text" name="Facilities" required 
                        placeholder="Facilities"/>
                    </Form.Group>

                    <Form.Group controlId="No_Of_Adults">
                        <Form.Label>No_Of_Adults</Form.Label>
                        <Form.Control type="text" name="No_Of_Adults" required 
                        placeholder="No_Of_Adults"/>
                    </Form.Group>

                    <Form.Group controlId="RoomTypeId">
                        <Form.Label>RoomTypeId</Form.Label>
                        <Form.Control type="text" name="RoomTypeId" required 
                        placeholder="RoomTypeId"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Facilities
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    </Modal.Body>
    
    <Modal.Footer>
        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
    </Modal.Footer>

</Modal>

            </div>
        )
    }

}