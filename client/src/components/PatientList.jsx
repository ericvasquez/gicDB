import React from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
export default (props) => {
	const { id } = props;
	const { removeFromDom } = props;
	const deletePatient = (id) => {
		axios.delete("http://localhost:8000/api/patients/" + props.id).then((res) => {
			removeFromDom(id);
		});
	};
	const getPatient = (e) => {
		axios.get("http://localhost:8000/api/patients/" + props.id);
	};
	return (
		<div>
			{" "}
			<Table striped bordered hover size="sm">
				<thead>
					<tr>
						<th>Last Name</th>
						<th>First Name</th>
						<th>Actions</th>
						<th>Phone Number</th>
					</tr>
				</thead>{" "}
				{props.patients.map((patient, idx) => {
					return (
						<tbody>
							<tr>
								<td>{patient.patientLastName}</td>
								<td>{patient.patientFirstName}</td>
								<td><Link to={`/api/patients/${patient._id}`}>
                                details
								</Link> | <Link to={`/api/patients/${patient._id}/edit`}>Edit</Link></td>
								<td>{patient.patientPhoneNumber}</td>
							</tr>
						</tbody>
					);
				})}
			</Table>
		</div>
	);
};
