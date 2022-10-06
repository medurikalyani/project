import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddSetModal} from './AddSetModal';
import {EditSetModal} from './EditSetModal';

export class SetRoomRates extends Component {
    constructor(props) {
        super(props)

        this.state = {setrates:[], addModalShow:false, editModalShow:false}
    }

    refreshList(){
        fetch("http://localhost:24396/api/setroomrates")
        .then(response=>response.json())
        .then(data=>{
            this.setState({setrates:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    deleteRoom(roomtypeid){
        if(window.confirm('Are you sure?')){
            fetch("http://localhost:24396/api/setroomrates/"+roomtypeid,{
                method:'DELETE',
                header:{'Accept':'application/json',
            'Content-Type':'application/json'}
            })
        }
    }
    render() {
        const {setrates,roomtypeid,roomtype,baseprice}=this.state;
        let addModalClose=()=>this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>RoomTypeId</th>
                        <th>RoomType</th>
                        <th>BasePrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {setrates.map(setrate=>
                            <tr key={setrate.RoomTypeId}>
                                <td>{setrate.RoomTypeId}</td>
                                <td>{setrate.RoomType}</td>
                                <td>{setrate.BasePrice}</td>
                                <td>

    <ButtonToolbar>
    <Button className="mr-2" variant="info"
        onClick={()=>this.setState({editModalShow:true,
        roomtypeid:setrate.RoomTypeId,roomtype:setrate.RoomType,baseprice:setrate.BasePrice})}>
            Edit
        </Button>

        <Button className="mr-2" variant="danger"
    onClick={()=>this.deleteRoom(setrate.RoomTypeId)}>
            Delete
        </Button>

        <EditSetModal show={this.state.editModalShow}
        onHide={editModalClose}
        roomtypeid={roomtypeid}
        roomtype={roomtype}
        baseprice={baseprice} />
    </ButtonToolbar>
                            </td>
                            </tr>)}
                    </tbody>
                    </Table>
                    <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Rooms</Button>

                    <AddSetModal show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
            </div>
        )
    }

}
export default SetRoomRates