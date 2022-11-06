import React, { Component } from "react";
import { Link } from "react-router-dom";
import DoctorService from "../services/DoctorService";
/* import {DoctorService} from "../services/DoctorService"; */




export class ListDoctorComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            doctors : []
        }
    }

    componentDidMount() {
        DoctorService.getAllDoctors().then ((res) => {
            console.log(res.data);
            this.setState({doctors : res.data});
        })
    
    }

    deleteDoctor(id){
        DoctorService.deleteDoctor(id).then(res =>{
            this.setState({doctors:this.state.doctors.filter(doctor => doctor.id !== id)});
            alert("Doctor deleted succcessfully...")
        })

    }

    updateDoctor(id){
}

render(){
    return(
        <>
        <h2 className = "text-center"> Doctor  List </h2>
        <div className="row">
                <table className = "table table-striped table-inverse">
                <thead className = "thead-inverse">
                <tr>
                    <th>Doctor Name</th>
                    <th>specialization</th>
                    <th>consultant</th>
                    <th>fee</th>
                    <th>Actions</th>

                </tr>
                </thead>
                <tbody>
                    {
                            this.state.doctors.map(
                                doctor =>
                                <tr key ={doctor.doctorId}>
                                <td>{doctor.doctorName}</td>
                                <td>{doctor.specialization}</td>
                                <td>{doctor.consultant}</td>
                                <td>{doctor.fee}</td>
                                <td>
                                    <button type="button" className="btn btn-success" style ={{marginRight :"10px"}}>
                                        <Link to ={"/updatedoctorbyid/" + doctor.doctorId} className ="styleLink">
                                             update
                                            </Link>

                                    </button>
                                    <button className ="btn btn-danger" onClick={() => this.deleteDoctor(doctor.doctorId)}>Delete</button>



                                </td>
                                </tr>
                            )

                    }
                </tbody>
                </table>
                </div>
        </>
    )
}
}