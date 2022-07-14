const PatientController = require("../controllers/patient.controller");

module.exports = app => {
  
    // //Show All
    app.get('/api/patients', PatientController.showAllPatients);

    //Create
    app.post('/api/patient/new', PatientController.createPatient);

    // //Get one
    app.get('/api/patients/:id', PatientController.getPatient);
    
    // //Update
    app.put('/api/patients/:id', PatientController.updatePatient);

    //Delete
     app.delete('/api/patients/:id', PatientController.deletePatient);
}