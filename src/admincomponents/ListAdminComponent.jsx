import React, {Component} from "react";
import { Link } from "react-router-dom";
import AdminService from "../services/AdminService";






export class ListAdminComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            admins : []
        }
    }

    componentDidMount() {
        AdminService.getAllAdmins().then ((res) => {
            console.log(res.data);
            this.setState({admins : res.data})
        }
        )
    }

    deleteAdmin(id){
        AdminService.deleteAdmin(id).then(res =>{
            this.setState({admins:this.state.admins.filter(admin => admin.id !=id)});

        })
    }
    updateAdmin(id){

    }

    render(){
        return(
            <>
            <h2 className="text-center"> Admin List</h2>
            <div className="row">
            <table className="table table-striped table-inverse">
                <thead className="thead-inverse">
          
            <tr>
                <th>Admin Name</th>
                <th>password</th>
                <th>Change Password</th>

            </tr>
            </thead>
            <tbody>
                {
                    this.state.admins.map(
                        admin =>
                        <tr key = {admin.adminId}>
                        <td>{admin.adminName}</td>
                        <td>{admin.password}</td>
                        <td>
                            <button type ="button" className="btn btn-success" style ={{marginRight : "10px"}}>
                            <Link to ={"/updateadmin/" +admin.adminId} className ="styleLink">
                                Change Password
                            </Link>
                            </button>
                           
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