const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    initialDate: {
        type: String
    },
    agentInitials: {
        type: String
    },
    patientStatus: {
        type: String
    },
    patientType: {
        type: String
    },
    mcStartDate: {
        type: String
    },
    mcStartDateB: {
        type: String
    },
    followUpTask: {
        type: String
    },
    pendingAction: {
        type: String
    },
    seeMspDbNotes: {
        type: String
    },
    patientLastName: {
        type: String,
        required: [true, "A Last Name is required"],
        minlength: [3, "The Patient's Last Name must be at least 3 characters long"]
    },
    patientFirstName: {
        type: String,
        required: [true, "A First Name is required"],
        minlength: [3, "The Patient's Name must be at least 3 characters long"]
    },
    patientMiddleName:{
            type: String
    },
    patientGender:{
            type: String
    },
    patientStreetAddress: {
        type: String
    },
    patientCity: {
        type: String
    },
    patientZipCode: {
        type: String
    },
    patientCounty: {
        type: String
    },
    patientPhoneNumber: {
        type: String
    },
    patientAlternatePhoneNumber: {
        type: String
    },
    patientMedicareNumber: {
        type: String
    },
    patientDateOfBirth: {
        type: String
    },
    patientSSN: {
        type: String
    },
    patientPlan: {
        type: String
    },
    patientEnrollmentDate: {
        type: String
    },
    patientEffectiveDate: {
        type: String
    },
    patientMemberId: {
        type: String
    },
    patientDoctor: {
        type: String
    },
    patientClinic: {
        type: String
    },
    patientNetwork: {
        type: String
    },
    patientCaseNotes: {
        type: String
    },
    patientReferralSource: {
        type: String
    },
    patientLISDate: {
        type: String
    },
    twoWeekFollowUpCall: {
        type: String
    },
    twoWeekFollowUpCallNotes: {
        type: String
    },
    oneMonthFollowUpCall: {
        type: String
    },
    oneMonthFollowUpCallNotes: {
        type: String
    },
    twoMonthFollowUpCall: {
        type: String
    },
    twoMonthFollowUpCallNotes: {
        type: String
    },
    threeMonthFollowUpCall: {
        type: String
    },
    threeMonthFollowUpCallNotes: {
        type: String
    },
    patientReferralDate: {
        type: String
    },
    patientEmail: {
        type: String
    },

}, { timestamps: true });

module.exports = mongoose.model("Patient", PatientSchema);