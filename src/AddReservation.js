import React, { Component } from "react";
import { Modal, Button, Row, Col, Form } from "react-bootstrap";
import "./Reservation.css";

export class AddReservation extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:24396/api/reservation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Id: event.target.Id.value,
        Name: event.target.Name.value,
        Email: event.target.Email.value,
        PhoneNumber: event.target.PhoneNumber.value,
        Address: event.target.Address.value,
        IdProof: event.target.IdProof.value,
        RoomType : event.target.RoomType.value,
        NoOfMembers: event.target.NoOfMembers.value,
        CheckIn :event.target.CheckIn.value,
        CheckOut : event.target.CheckOut.value,
        TotalAmount: event.target.TotalAmount.value,
      }),
    })
      .then((res) => res.json())
      .then(
        (result) => {
          alert(result);
        },
        (error) => {
          alert("Failed");
        }
      );
  }
  render() {
    return (
      <div className="container">
        <Modal
          {...this.props}
          size="lg"
          labelled="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Row>
              <Col sm={6}>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group controlId="Id">
                    <Form.Label>Id : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Id"
                      required
                      placeholder="Id"
                    />
                  </Form.Group>
                  <Form.Group controlId="Name">
                    <Form.Label>Name : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Name"
                      required
                      placeholder="Name"
                    />
                  </Form.Group>
                  <Form.Group controlId="Email">
                    <Form.Label>Email : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Email"
                      required
                      placeholder="Email"
                    />
                  </Form.Group>
                  <Form.Group controlId="PhoneNumber">
                    <Form.Label>PhoneNumber : </Form.Label>
                    <Form.Control
                      type="text"
                      name="PhoneNumber"
                      required
                      placeholder="PhoneNumber"
                    />
                  </Form.Group>
                  <Form.Group controlId="Address">
                    <Form.Label>Address : </Form.Label>
                    <Form.Control
                      type="text"
                      name="Address"
                      required
                      placeholder="Address"
                    />
                  </Form.Group>
                  <Form.Group controlId="IdProof">
                    <Form.Label>IdProof : </Form.Label>
                    <Form.Control
                      type="text"
                      name="IdProof"
                      required
                      placeholder="IdProof"
                    />
                  </Form.Group>
                  <Form.Group controlId="RoomType">
                    <Form.Label>RoomType : </Form.Label>
                    <Form.Control
                      type="text"
                      name="RoomType"
                      required
                      placeholder="RoomType"
                    />
                  </Form.Group>
                  <Form.Group controlId="NoOfMembers">
                    <Form.Label>No.Of Members : </Form.Label>
                    <Form.Control
                      type="text"
                      name="NoOfMembers"
                      required
                      placeholder="NoOfMembers"
                    />
                  </Form.Group>
                  <Form.Group controlId="CheckIn">
                    <Form.Label>CheckIn : </Form.Label>
                    <Form.Control
                      type="date"
                      name="CheckIn"
                      required
                      placeholder="CheckIn"
                    />
                  </Form.Group>
                  <Form.Group controlId="CheckOut">
                    <Form.Label>CheckOut : </Form.Label>
                    <Form.Control
                      type="date"
                      name="CheckOut"
                      required
                      placeholder="CheckOut"
                    />
                  </Form.Group>
                  <Form.Group controlId="TotalAmount">
                    <Form.Label>TotalAmount : </Form.Label>
                    <Form.Control
                      type="text"
                      name="TotalAmount"
                      required
                      placeholder="TotalAmount"
                    />
                  </Form.Group>


                  <Form.Group>
                    <Button variant="primary" type="submit">
                      Add
                    </Button>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddReservation;