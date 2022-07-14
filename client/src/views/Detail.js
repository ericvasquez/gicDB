import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
export default (props) => {
	const { removeFromDom } = props;
	const deletePatient = (patientId) => {
		axios
			.delete("http://localhost:8000/api/patients/" + patientId)
            .then((res) => setPatient(res.data))
            .then(window.location = "/api/patients") 
	};
	const [patient, setPatient] = useState({});
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/patients/" + props.id)
			.then((res) => setPatient(res.data));
	}, []);
	return (
		<Container>
            <Row>
				<Col md={4}>
					<h6>Detail Page</h6>
				</Col>
				<Col md={{ span: 4, offset: 4 }}>
                <Link to={`/api/patients`}>back to home</Link>
				</Col>
			</Row>
            <Row>
				<Col md={4}>
                <h1>{patient.patientFirstName} {patient.patientLastName}</h1>
				</Col>
				<Col md={{ span: 4, offset: 4 }}>
                <Button
				variant="danger"
				onClick={(e) => {
					deletePatient(patient._id)
				}}>
				Delete {patient.patientFirstName} {patient.patientLastName}
			</Button>
				</Col>
			</Row>

            <p>Agent Initials: {patient.agentInitials}</p>
            <p>MC Start Date: {patient.mcStartDate}</p>
            <p>Follow Up Task: {patient.followUpTask}</p>
            <p>Pending Action: {patient.pendingAction}</p>
            <p>See MSP DB Notes: {patient.seeMspDbNotes}</p>
            <p>Last Name: {patient.patientLastName}</p>
            <p>First Name: {patient.patientFirstName}</p>
            <p>Street Address: {patient.patientStreetAddress}</p>
            <p>City: {patient.patientCity}</p>
            <p>Zip Code: {patient.patientZipCode}</p>
            <p>Phone Number: {patient.patientPhoneNumber}</p>
            <p>Medicare Number: {patient.patientMedicareNumber}</p>
            <p>Date of Birth: {patient.patientDateOfBirth}</p>
            <p>SSN: {patient.patientSSN}</p>
            <p>Plan: {patient.patientPlan}</p>
            <p>Estimated Plan Effective Date: {patient.patientEstimatedPlanEffectiveDate}</p>
            <p>Member ID: {patient.patientMemberId}</p>
            <p>Doctor: {patient.patientDoctor}</p>
            <p>Clinic: {patient.patientClinic}</p>
            <p>Network: {patient.patientNetwork}</p>
            <p>Case Notes: {patient.patientCaseNotes}</p>
            <p>Referral Source: {patient.patientReferralSource}</p>
            <p>Referral Date: {patient.patientReferralDate}</p>
            <p>Email: {patient.patientEmail}</p>
			{/* <p>Pet Type: {pet.petType}</p>
			<p>Description: {pet.petDescription}</p>
			<p>Skills: {pet.skill1}</p>
			<p>{pet.skill2}</p>
			<p>{pet.skill3}</p> */}
		</Container>
	);
};
