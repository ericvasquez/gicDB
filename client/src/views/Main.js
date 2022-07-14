import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import PatientForm from "../components/PatientForm";
import PatientList from "../components/PatientList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
export default () => {
	const [patients, setPatients] = useState([]);
	const [loaded, setLoaded] = useState(false);
	useEffect(() => {
		axios.get("http://localhost:8000/api/patients").then((res) => {
			setPatients(res.data);
			setLoaded(true);
		});
	}, []);

	return (
		<Container>
			<Row>
				<Col md={4}>
					<h1>Patient Database</h1>
				</Col>
				<Col md={{ span: 4, offset: 4 }}>
					<Link to={`/api/patient/new`}>Add A New Patient</Link>
				</Col>
			</Row>

			<h3>This is the current list</h3>

			{loaded && <PatientList patients={patients} />}
		</Container>
	);
};
