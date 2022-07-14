import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/Detail';
import 'bootstrap/dist/css/bootstrap.min.css';
import PatientForm from './components/PatientForm';




function App() {
  return (
    <div className="App">
      <Router>
        <Main path="api/patients/" />
        <Detail path="api/patients/:id" />
        <PatientForm path="api/patient/new" />
        {/* <UpdateForm path="api/pets/:id/edit"/>  */}
      </Router>
    </div>
  );
}

export default App;
