import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
export default (props) => {
	const { removeFromDom } = props;
	const deletePatient = (patientId) => {
		axios
			.delete("http://localhost:8000/api/patients/" + patientId)
			.then((res) => setPatient(res.data))
			.then((window.location = "/api/patients"));
	};
	const [patient, setPatient] = useState({});
	useEffect(() => {
		axios
			.get("http://localhost:8000/api/patients/" + props.id)
			.then((res) => setPatient(res.data));
	}, []);
	return (
		<Container>
			<h1>
				{patient.patientFirstName} {patient.patientLastName}
			</h1>
			<Row>
				{/* <Col md={4}>
					<h6>Detail Page</h6>
				</Col> */}
				<Col md={{ span: 4, offset: 4 }}>
					<Link to={`/api/patients`}>back to home</Link>
				</Col>
			</Row>
			<Row>
				{/* <Col md={4}>
                <h1>{patient.patientFirstName} {patient.patientLastName}</h1>
				</Col> */}
				<Col md={{ span: 4, offset: 4 }}>
					<Button
						variant="danger"
						onClick={(e) => {
							deletePatient(patient._id);
						}}>
						Delete {patient.patientFirstName} {patient.patientLastName}
					</Button>
				</Col>
			</Row>

			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Date</Card.Header>
					<Card.Body>
						<Card.Text>{patient.initialDate}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Agent</Card.Header>
					<Card.Body>
						<Card.Text>{patient.agentInitials}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Client Status</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientStatus}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Type</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientType}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Last Name</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientLastName}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">First Name</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientFirstName}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Middle Name</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientMiddleName}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">DOB</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientDateOfBirth}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Gender</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientGender}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Address</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientStreetAddress}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">City</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientCity}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Zip</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientZipCode}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">County</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientCounty}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Phone Number</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientPhoneNumber}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Alternate Phone Number</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientAlternatePhoneNumber}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Email</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientEmail}</Card.Text>
					</Card.Body>
			</Card>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">SS#</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientSSN}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Medicare #</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientMedicareNumber}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">MC Start Date Part A</Card.Header>
					<Card.Body>
						<Card.Text>{patient.mcStartDate}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">MC Start Date Part B</Card.Header>
					<Card.Body>
						<Card.Text>{patient.mcStartDateB}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Plan</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientPlan}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Enrollment Date</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientEnrollmentDate}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Effective Date</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientEffectiveDate}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Member Plan ID</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientMemberId}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">PCP</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientDoctor}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Clinic</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientClinic}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Network</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientNetwork}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">LIS Completed</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientLISDate}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Initial</Card.Header>
					<Card.Body>
						<Card.Text>{patient.agentInitials}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Refferal Source</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientReferralSource}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">2 Week Follow Up Call</Card.Header>
					<Card.Body>
						<Card.Text>{patient.twoWeekFollowUpCall}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Notes</Card.Header>
					<Card.Body>
						<Card.Text>{patient.twoWeekFollowUpCallNotes}</Card.Text>
					</Card.Body>
				</Card>
				<Card></Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">30 Day Follow Up Call</Card.Header>
					<Card.Body>
						<Card.Text>{patient.oneMonthFollowUpCall}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Notes</Card.Header>
					<Card.Body>
						<Card.Text>{patient.oneMonthFollowUpCallNotes}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<CardGroup>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">60 Day Follow Up Call</Card.Header>
					<Card.Body>
						<Card.Text>{patient.twoMonthFollowUpCall}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Notes</Card.Header>
					<Card.Body>
						<Card.Text>{patient.twoMonthFollowUpCallNotes}</Card.Text>
					</Card.Body>
				</Card>
				<Card></Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">90 Day Follow Up Call</Card.Header>
					<Card.Body>
						<Card.Text>{patient.threeMonthFollowUpCall}</Card.Text>
					</Card.Body>
				</Card>
				<Card border="dark" style={{ width: "18rem" }}>
					<Card.Header as="h4">Notes</Card.Header>
					<Card.Body>
						<Card.Text>{patient.threeMonthFollowUpCallNotes}</Card.Text>
					</Card.Body>
				</Card>
			</CardGroup>
			<br></br>
			<Card border="dark">
					<Card.Header as="h4">Case Notes</Card.Header>
					<Card.Body>
						<Card.Text>{patient.patientCaseNotes}</Card.Text>
					</Card.Body>
				</Card>		
		</Container>
	);
};
