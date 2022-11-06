import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ListAdminComponent } from './admincomponents/ListAdminComponent';
import './App.css';
import { AddDoctorComponent } from './components/AddDoctorComponent';
import { ListDoctorComponent } from './components/ListDoctorComponent';
import { UpdateDoctorComponent } from './components/updateDoctorComponent';

    


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
      <Switch>
      <Route path="/getalladmins" component={ListAdminComponent}></Route>
      <Route path="/getalldoctors" component={ListDoctorComponent}></Route>
      <Route path="/adddoctor" component={AddDoctorComponent}></Route>
      <Route path="/updatedoctorbyid/:id" component={UpdateDoctorComponent}></Route>   
     </Switch>
     </div>
     </BrowserRouter>
 
    </div>

  );
}

export default App;
