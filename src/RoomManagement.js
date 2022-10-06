import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddRoomModal} from './AddRoomModal';
import {EditRoomModal} from './EditRoomModal';

export class RoomManagement extends Component {
    constructor(props) {
        super(props)

        this.state = {rooms:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("http://localhost:24396/api/roommanagement")
        .then(response=>response.json())
        .then(data=>{
            this.setState({rooms:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteRoom(roomno){
        if(window.confirm('Are you sure?')){
            fetch("http://localhost:24396/api/roommanagement/"+roomno,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render() {
        const {rooms,roomno,facilities,adults,roomid}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>RoomNo</th>
                        <th>Facilities</th>
                        <th>No Of Adults</th>
                        <th>RoomTypeId</th>
                        <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rooms.map(room=>
                            <tr key={room.RoomNo}>
                                <td>{room.RoomNo}</td>
                                <td>{room.Facilities}</td>
                                <td>{room.No_Of_Adults}</td>
                                <td>{room.RoomTypeId}</td>
                                <td>

    <ButtonToolbar>
    <Button className="mr-2" variant="info"
        onClick={()=>this.setState({editModalShow:true,
        roomno:room.RoomNo,facilities:room.Facilities,adults:room.No_of_Adults,roomid:room.RoomTypeId})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
        onClick={()=>this.deleteRoom(room.RoomNo)}>
            Delete
        </Button>

        <EditRoomModal show={this.state.editModalShow}
        onHide={editModalClose}
        roomno={roomno}
        facilities={facilities}
        adults={adults}
        roomid={roomid} />
    </ButtonToolbar>
                            </td>
                            </tr>)}
                    </tbody>
                    </Table>
                    <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Room Management</Button>

                    <AddRoomModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }
}
export default RoomManagement