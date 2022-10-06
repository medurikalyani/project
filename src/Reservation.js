import React,{Component} from 'react';
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddReservation} from './AddReservation.js';
import {EditReservation } from './EditReservation';


export class Reservation extends Component{

    constructor(props){
        super(props);
        this.state={Res:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("process.env.REACT_APP_API+'Reservation")
        .then(response=>response.json())
        .then(data=>{
            this.setState({Res:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {Res}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let EditModalClose=()=>this.setState({editModalShow:false});
        return(
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                   
                    <tbody>
                    {Res.map(Res => <tr key={Res.Id}>
                        <td>{Res.Id}</td>
                        <td>{Res.Name}</td>
                        <td>{Res.Email}</td>
                        <td>{Res.PhoneNumber}</td>
                        <td>{Res.Address}</td>
                        <td>{Res.IdProof}</td>
                        <td>{Res.RoomType}</td>
                        <td>{Res.NoOfMembers}</td>
                        <td>{Res.CheckIn}</td>
                        <td>{Res.CheckOut}</td>
                        <td>{Res.TotalAmount}</td>
                        <td>
                        <ButtonToolbar>
                            <Button className="mr-2" variant="info"
                            onClick={()=>this.setState({EditModalShow:true,
                                    Id:Res.Id,Name:Res.Name,Email:Res.Email,PhoneNumber:Res.PhoneNumber,Address:Res.Address,IdProof:Res.IdProof,TotalAmount:Res.TotalAmount})}>
                                    Edit 
                            </Button>
                        </ButtonToolbar>

                        </td>

                            </tr>)}
                    </tbody>

                </Table>

                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Reservation </Button>

                    <AddReservation show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar> <br/>
                <ButtonToolbar>
                <Button variant='primary'
                    onClick={()=>this.setState({editModalShow:true})}>
                     Edit Reservation </Button>

                    <EditReservation show={this.state.editModalShow} 
                    onHide={EditModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}

export default Reservation;