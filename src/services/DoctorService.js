import axios from "axios";

class DoctorService{

    getAllDoctors(){
        return axios.get("http://localhost:8686/appointment/doctor/getalldoctors");
    }

    createDoctor(doctor){
        return axios.post("http://localhost:8686/appointment/doctor/adddoctor",doctor);
    }

    deleteDoctor(id){
        return axios.delete("http://localhost:8686/appointment/doctor/deletedoctor/"+id);
    }

    updateDoctor(doctor,id){
        return axios.put("http://localhost:8686/appointment/doctor/updatedoctorbyid/"+id,doctor);
    } 

    getDoctor(id){
        return axios.get("http://localhost:8686/appointment/doctor/getdoctorbyid/"+id);
    }

}

export default new DoctorService();