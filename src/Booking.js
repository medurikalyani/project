import React, { Component } from 'react'
import {Table} from 'react-bootstrap';

import {Button,ButtonToolbar} from 'react-bootstrap';
import {AddReservation} from './AddReservation';
import Payment from './Payment';

export class Booking extends Component {
    constructor(props) {
        super(props)

        this.state = {setrates:[], addModalShow:false}
    }

    refreshList(){
        fetch("http://localhost:24396/api/booking")
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

    render() {
        const {setrates,roomtypeid,roomtype,baseprice}=this.state;
        //let addModalClose=()=>this.setState({addModalShow:false});
        // let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>RoomType</th>
                        <th>Facilities</th>
                        <th>No_of_Adults</th>
                        <th>BasePrice</th>
                        </tr>
                    </thead>
                    <tbody>
                        {setrates.map(setrate=>
                            <tr key={setrate.RoomType}>
                                <td>{setrate.RoomType}</td>
                                <td>{setrate.Facilities}</td>
                                <td>{setrate.No_of_Adults}</td>
                                <td>{setrate.BasePrice}</td>
                                
                            </tr>)}
                    </tbody>
                    </Table>
            </div>
        )
    }

}
export default Booking