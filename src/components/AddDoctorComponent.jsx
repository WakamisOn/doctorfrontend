import React,{ Component } from "react";
import DoctorService from "../services/DoctorService";

export class AddDoctorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            doctorName : '',
            specialization : '',
            consultant :'',
            fee :'',

        }
        this.changeDoctorNameHandler = this.changeDoctorNameHandler.bind(this);
        this.changeSpecializationHandler = this.changeSpecializationHandler.bind(this);
        this.changeConsultantHandler = this.changeConsultantHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);

        this.saveDoctor = this.saveDoctor.bind(this);


    }

    saveDoctor = (e) => {
        e.preventDefault();
        let Doctor = {
            doctorName: this.state.doctorName,
            specialization: this.state.specialization,
            consultant: this.state.consultant,
            fee: this.state.fee,


        }
        console.log('Doctor =>' + JSON.stringify(Doctor))
        DoctorService.createDoctor(Doctor).then(res =>{
            alert("Doctor added succcessfully...")
        })
        this.props.history.push("/getalldoctors");

    }

        cancel() {
            alert("leaving without saving....")
        }

        changeDoctorNameHandler(event){
            this.setState({doctorName:event.target.value})
        }
    
        changeSpecializationHandler(event){
            this.setState({specialization:event.target.value})
        }
    
        changeConsultantHandler(event){
            this.setState({consultant:event.target.value})
        }
        changeFeeHandler(event){
            this.setState({fee:event.target.value})
        }

        render() {
            return (
                <div>
                         <br ></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h2>Add Doctor</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                  <label >Doctor Name</label>
                                  <input type="text" name="doctorName" id="" className="form-control" placeholder="Enter doctorName" 
                                   value={this.state.doctorName} onChange={this.changeDoctorNameHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Specialization</label>
                                  <input type="text" name="specialization" id="" className="form-control" placeholder="Enter specialization" 
                                   value={this.state.specialization} onChange={this.changeSpecializationHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Consultant</label>
                                  <input type="text" name="consultant" id="" className="form-control" placeholder="Enter consultant" 
                                   value={this.state.consultant} onChange={this.changeConsultantHandler} />
                                </div>
                                <div className="form-group">
                                  <label >Fee</label>
                                  <input type="text" name="fee" id="" className="form-control" placeholder="Enter fee" 
                                   value={this.state.fee} onChange={this.changeFeeHandler} />
                                </div>
                                <button type="button" className="btn btn-success" onClick={this.saveDoctor}>Add</button>
                                <button type="button" className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        )
    }

}
