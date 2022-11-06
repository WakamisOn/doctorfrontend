import axios from "axios";

class AdminService{

    getAllAdmins(){
        return axios.get("http://localhost:8686/appointment/adminapi/getalladmins");
    }

    saveadmin(admin){
        return axios.post("http://localhost:8686/appointment/doctor/addadmin",admin);
    }

    deleteadmin(id){
        return axios.delete("http://localhost:8686/appointment/doctor/deleteadminbyadmin/"+id);
    }

    updateadmin(admin,id){
        return axios.put("http://localhost:8686/appointment/doctor/updateadminbyid/"+id,admin);
    } 

    getadmin(id){
        return axios.get("http://localhost:8686/appointment/doctor/getadminbyid/"+id);
    }

}

export default new AdminService();