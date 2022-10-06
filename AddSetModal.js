import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddSetModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch("http://localhost:24396/api/setroomrates",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                RoomTypeId:event.target.RoomTypeId.value,
                RoomType:event.target.RoomType.value,
                BasePrice:event.target.BasePrice.value
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
            Add Rooms
        </Modal.Title>
    </Modal.Header>
    <Modal.Body>

        <Row>
            <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>

                    <Form.Group controlId="RoomTypeId">
                        <Form.Label>RoomType</Form.Label>
                        <Form.Control type="text" name="RoomTypeId" required 
                        placeholder="RoomTypeId"/>
                    </Form.Group>

                    <Form.Group controlId="RoomType">
                        <Form.Label>RoomType</Form.Label>
                        <Form.Control type="text" name="RoomType" required 
                        placeholder="RoomType"/>
                    </Form.Group>

                    <Form.Group controlId="BasePrice">
                        <Form.Label>BasePrice</Form.Label>
                        <Form.Control type="text" name="BasePrice" required 
                        placeholder="BasePrice"/>
                    </Form.Group>

                    <Form.Group>
                        <Button variant="primary" type="submit">
                            Add Rooms
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