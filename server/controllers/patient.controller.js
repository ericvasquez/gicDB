const Patient = require("../models/patient.model");

//CREATE
module.exports.createPatient = (req, res) => {
    Patient.create(req.body)
    .then(newPatient => res.json({ patient: newPatient }))
    .catch(err => res.json({message: "Something went wrong while creating a new Patient", error: err}))
}

//SHOW ALL
module.exports.showAllPatients = (req, res) => {
    Patient.find({})
        .then(patients => res.json(patients))
        .catch(err => res.json({ message: "Something went wrong while getting all the patients", error: err }))
}

//SHOW ONE
module.exports.getPatient = (req, res) => {
    Patient.findOne({ _id: req.params.id })
        .then(patient => res.json(patient))
    .catch(err => res.json({ message: "Something went wrong while getting a single Patient", error: err }))
}

//UPDATE
module.exports.updatePatient = (req, res) => {
    Patient.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedPatient => res.json(updatedPatient))
        .catch(err => res.json({ message: "Something went wrong while updating a patient", error: err }))
}

//DELETE
module.exports.deletePatient = (req, res) => {
    Patient.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation =>res.json(deleteConfirmation))
        .catch(err =>res.json(err))
}
