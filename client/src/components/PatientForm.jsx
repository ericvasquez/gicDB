import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default () => {
	const [errors, setErrors] = useState([]);
	const [initialDate, setInitialDate] = useState("");
	const [agentInitials, setAgentInitials] = useState("");
	const [patientStatus, setPatientStatus] = useState("");
	const [patientType, setPatientType] = useState("");
	const [mcStartDate, setMcStartDate] = useState("");
	const [mcStartDateB, setMcStartDateB] = useState("");
	const [followUpTask, setFollowUpTask] = useState("");
	const [pendingAction, setPendingAction] = useState("");
	const [seeMspDbNotes, setSeeMspDbNotes] = useState("");
	const [patientLastName, setPatientLastName] = useState("");
	const [patientFirstName, setPatientFirstName] = useState("");
	const [patientMiddleName, setPatientMiddleName] = useState("");
	const [patientGender, setPatientGender] = useState("");
	const [patientStreetAddress, setPatientStreetAddress] = useState("");
	const [patientCity, setPatientCity] = useState("");
	const [patientZipCode, setPatientZipCode] = useState("");
	const [patientCounty, setPatientCounty] = useState("");
	const [patientPhoneNumber, setPatientPhoneNumber] = useState("");
	const [patientAlternatePhoneNumber, setPatientAlternatePhoneNumber] = useState("");
	const [patientMedicareNumber, setPatientMedicareNumber] = useState("");
	const [patientDateOfBirth, setPatientDateOfBirth] = useState("");
	const [patientSSN, setPatientSSN] = useState("");
	const [patientPlan, setPatientPlan] = useState("");
	const [
		patientEstimatedPlanEffectiveDate,
		setPatientEstimatedPlanEffectiveDate,
	] = useState("");
	const [patientMemberId, setPatientMemberId] = useState("");
	const [patientDoctor, setPatientDoctor] = useState("");
	const [patientClinic, setPatientClinic] = useState("");
	const [patientNetwork, setPatientNetwork] = useState("");
	const [patientCaseNotes, setPatientCaseNotes] = useState("");
	const [patientReferralSource, setPatientReferralSource] = useState("");
	const [patientReferralDate, setPatientReferralDate] = useState("");
	const [patientEmail, setPatientEmail] = useState("");

	const onSubmitHandler = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:8000/api/patient/new", {
				initialDate,
				agentInitials,
				patientStatus,
				patientType,
				mcStartDate,
				mcStartDateB,
				followUpTask,
				pendingAction,
				seeMspDbNotes,
				patientLastName,
				patientFirstName,
				patientMiddleName,
				patientGender,
				patientStreetAddress,
				patientCity,
				patientZipCode,
				patientCounty,
				patientPhoneNumber,
				patientAlternatePhoneNumber,
				patientMedicareNumber,
				patientDateOfBirth,
				patientSSN,
				patientPlan,
				patientEstimatedPlanEffectiveDate,
				patientMemberId,
				patientDoctor,
				patientClinic,
				patientNetwork,
				patientCaseNotes,
				patientReferralSource,
				patientReferralDate,
				patientEmail,
			})
			.then((res) => {
				if (res.data.error) {
					console.log(res.data.error);
					console.log(res.data.error.errors);
					const errorResponse = res.data.error.errors;
					const errorArr = [];
					for (const key of Object.keys(errorResponse)) {
						errorArr.push(errorResponse[key].message);
					}
					setErrors(errorArr);
				} else {
					window.location = "/api/patients";
				}
			})
			.catch((err) => {});
	};
	return (
		<form onSubmit={onSubmitHandler}>
			{errors.map((err, index) => (
				<p key={index}>{err}</p>
			))}
			<Link to={`/api/patients`}>back to home</Link>
			<h1>Add New</h1>
			<p>
				<label>Date:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setInitialDate(e.target.value)}
					value={initialDate}
				/>
			</p>
			<p>
				<label>Agent:</label>
				<br />
				{/* <input
					type="text"
					onChange={(e) => setAgentInitials(e.target.value)}
					value={agentInitials}
				/> */}
				<select
					value={agentInitials}
					onChange={(e) => setAgentInitials(e.target.value)}>
					<option value=""></option>
					<option value="Belinda Perez">Belinda Perez</option>
					<option value="Gilda Castano">Gilda Castano</option>
					<option value="Joann Garza">Joann Garza</option>
					<option value="Lisa Streeter">Lisa Streeter</option>
					<option value="Other">Other</option>
				</select>
			</p>
			<p>
				<label>Client Status:</label>
				<br />
				<select
					value={patientStatus}
					onChange={(e) => setPatientStatus(e.target.value)}>
					<option value=""></option>
					<option value="Active">Active</option>
					<option value="Inactive">Inactive</option>
					<option value="Deceased">Deceased</option>
					<option value="Potential">Potential</option>
				</select>
			</p>
			<p>
				<label>Type:</label>
				<br />
				<select
					value={patientType}
					onChange={(e) => setPatientType(e.target.value)}>
					<option value=""></option>
					<option value="New">New</option>
					<option value="Flip">Flip</option>
					<option value="GIC Flip">GIC Flip</option>
				</select>
			</p>
			<p>
				<label>Last Name:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientLastName(e.target.value)}
					value={patientLastName}
				/>
			</p>
			<p>
				<label>First Name:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientFirstName(e.target.value)}
					value={patientFirstName}
				/>
			</p>
			<p>
				<label>Middle Name:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientMiddleName(e.target.value)}
					value={patientMiddleName}
				/>
			</p>
			<p>
				<label>Date Of Birth:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientDateOfBirth(e.target.value)}
					value={patientDateOfBirth}
				/>
			</p>
			<p>
				<label>Gender:</label>
				<br />
				<select
					value={patientGender}
					onChange={(e) => setPatientGender(e.target.value)}>
					<option value=""></option>
					<option value="F">F</option>
					<option value="M">M</option>
				</select>
			</p>
			<p>
				<label>Address:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientStreetAddress(e.target.value)}
					value={patientStreetAddress}
				/>
			</p>
			<p>
				<label>City:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientCity(e.target.value)}
					value={patientCity}
				/>
			</p>
			<p>
				<label>Zip Code:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientZipCode(e.target.value)}
					value={patientZipCode}
				/>
			</p>
			<p>
				<label>County:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientCounty(e.target.value)}
					value={patientCounty}
				/>
			</p>
			<p>
				<label>Phone Number:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientPhoneNumber(e.target.value)}
					value={patientPhoneNumber}
				/>
			</p>
			<p>
				<label>Alternate Phone Number:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientAlternatePhoneNumber(e.target.value)}
					value={patientAlternatePhoneNumber}
				/>
			</p>
			<p>
				<label>Email:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientEmail(e.target.value)}
					value={patientEmail}
				/>
			</p>
			<p>
				<label>SSN:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientSSN(e.target.value)}
					value={patientSSN}
				/>
			</p>
			<p>
				<label>Medicare #:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientMedicareNumber(e.target.value)}
					value={patientMedicareNumber}
				/>
			</p>
			<p>
				<label>MC Start Date Part A:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setMcStartDate(e.target.value)}
					value={mcStartDate}
				/>
			</p>
			<p>
				<label>MC Start Date Part B:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setMcStartDateB(e.target.value)}
					value={mcStartDateB}
				/>
			</p>
			<p>
				<label>Plan:</label>
				<br />
				{/* <input
					type="text"
					onChange={(e) => setPatientPlan(e.target.value)}
					value={patientPlan}
				/> */}
				<select
					value={patientPlan}
					onChange={(e) => setPatientPlan(e.target.value)}>
					<option value="AARP MA HMO">AARP MA HMO</option>
					<option value="AARP MA Secure Horizon HMO">AARP MA Secure Horizon HMO</option>
					<option value="UHC MA Dual HMO">UHC MA Dual HMO</option>
					<option value="UHC MA Chronic HMO">UHC MA Chronic HMO</option>
					<option value="UHC MA Patriot HMO">UHC MA Patriot HMO</option>
					<option value="AARP MA Choice PPO">AARP MA Choice PPO</option>
					<option value="UHC MA Choice RPPO">UHC MA Choice RPPO</option>
					<option value="UHC Dual Choice RPPO">UHC Dual Choice RPPO</option>
					<option value="UHC MA Gold RPPO">UHC MA Gold RPPO</option>
					<option value="UHC MA Silver RPPO">UHC MA Silver RPPO</option>
					<option value="Humana Gold Plus HMO">Humana Gold Plus HMO</option>
					<option value="Humana Gold Plus HMO D-SNP">Humana Gold Plus HMO D-SNP</option>
					<option value="Humana Gold Plus Heart & Diabetes HMO">Humana Gold Plus Heart & Diabetes HMO</option>
					<option value="Humana Choice PPO">Humana Choice PPO</option>
					<option value="Humana RPPO">Humana RPPO</option>
					<option value="Humana Honor PPO">Humana Honor PPO</option>
					<option value=""></option>
				</select>
			</p>
			<p>
				<label>Follow Up Task:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setFollowUpTask(e.target.value)}
					value={followUpTask}
				/>
			</p>
			<p>
				<label>Pending Action:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPendingAction(e.target.value)}
					value={pendingAction}
				/>
			</p>
			<p>
				<label>See MSP DB Notes:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setSeeMspDbNotes(e.target.value)}
					value={seeMspDbNotes}
				/>
			</p>
			<p>
				<label>Estimated Plan Effective Date:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientEstimatedPlanEffectiveDate(e.target.value)}
					value={patientEstimatedPlanEffectiveDate}
				/>
			</p>
			<p>
				<label>Member Id:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientMemberId(e.target.value)}
					value={patientMemberId}
				/>
			</p>
			<p>
				<label>Doctor:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientDoctor(e.target.value)}
					value={patientDoctor}
				/>
			</p>
			<p>
				<label>Clinic:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientClinic(e.target.value)}
					value={patientClinic}
				/>
			</p>
			<p>
				<label>Network:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientNetwork(e.target.value)}
					value={patientNetwork}
				/>
			</p>
			<p>
				<label>Case Notes:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientCaseNotes(e.target.value)}
					value={patientCaseNotes}
				/>
			</p>
			<p>
				<label>Referral Source:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientReferralSource(e.target.value)}
					value={patientReferralSource}
				/>
			</p>
			<p>
				<label>Referral Date:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientReferralDate(e.target.value)}
					value={patientReferralDate}
				/>
			</p>

			{/* <p>
				<label>Skill 1:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setSkill1(e.target.value)}
					value={skill1}
				/>
			</p>
			<p>
				<label>Skill 2:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setSkill2(e.target.value)}
					value={skill2}
				/>
			</p>
			<p>
				<label>Skill 3:</label>
				<br />
				<input
					type="text"
					onChange={(e) => setSkill3(e.target.value)}
					value={skill3}
				/>
			</p> */}

			<input type="submit" className="btn btn-primary" value="Add Patient" />
		</form>
	);
};
