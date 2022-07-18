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
	const [
		patientAlternatePhoneNumber,
		setPatientAlternatePhoneNumber,
	] = useState("");
	const [patientMedicareNumber, setPatientMedicareNumber] = useState("");
	const [patientDateOfBirth, setPatientDateOfBirth] = useState("");
	const [patientSSN, setPatientSSN] = useState("");
	const [patientPlan, setPatientPlan] = useState("");
	const [patientEnrollmentDate, setPatientEnrollmentDate] = useState("");
	const [patientEffectiveDate, setPatientEffectiveDate] = useState("");
	const [patientMemberId, setPatientMemberId] = useState("");
	const [patientDoctor, setPatientDoctor] = useState("");
	const [patientClinic, setPatientClinic] = useState("");
	const [patientNetwork, setPatientNetwork] = useState("");
	const [patientLISDate, setPatientLISDate] = useState("");
	const [patientReferralSource, setPatientReferralSource] = useState("");
	const [twoWeekFollowUpCall, setTwoWeekFollowUpCall] = useState("");
	const [twoWeekFollowUpCallNotes, setTwoWeekFollowUpCallNotes] = useState("");
	const [oneMonthFollowUpCall, setOneMonthFollowUpCall] = useState("");
	const [oneMonthFollowUpCallNotes, setOneMonthFollowUpCallNotes] = useState(
		"",
	);
	const [twoMonthFollowUpCall, setTwoMonthFollowUpCall] = useState("");
	const [twoMonthFollowUpCallNotes, setTwoMonthFollowUpCallNotes] = useState(
		"",
	);
	const [threeMonthFollowUpCall, setThreeMonthFollowUpCall] = useState("");
	const [
		threeMonthFollowUpCallNotes,
		setThreeMonthFollowUpCallNotes,
	] = useState("");
	const [patientCaseNotes, setPatientCaseNotes] = useState("");
	const [patientReferralDate, setPatientReferralDate] = useState("");
	const [patientEmail, setPatientEmail] = useState("");
	const [mspStaffNotes, setMspStaffNotes] = useState("");
	const [mspDateAdded, setMspDateAdded] = useState("");
	const [mspStatus, setMspStatus] = useState("");
	const [mspLevel, setMspLevel] = useState("");
	const [mspCaseNumber, setMspCaseNumber] = useState("");
	const [mspStartDate, setMspStartDate] = useState("");
	const [mspEndDate, setMspEndDate] = useState("");
	const [mspQMBNumber, setMspQMBNumber] = useState("");
	const [mspEDGNumber, setMspEDGNumber] = useState("");
	const [mspPendingAction, setMspPendingAction] = useState("");
	const [mspColorCode, setMspColorCode] = useState("");
	const [mspNewRenewal, setMspNewRenewal] = useState("");
	const [mspFaxedtoTHHSDate, setMspFaxedtoTHHSDate] = useState("");
	const [mspFaxedtoTHHSInitials, setMspFaxedtoTHHSInitials] = useState("");
	const [mspConfirmedDate, setMspConfirmedDate] = useState("");
	const [mspConfirmedDateInitials, setMspConfirmedDateInitials] = useState("");
	const [mspDaysFromFaxDate, setMspDaysFromFaxDate] = useState("");
	const [mspTwoWeekFUDate, setMspTwoWeekFUDate] = useState("");
	const [mspTwoWeekFUDateCompleted, setMspTwoWeekFUDateCompleted] = useState(
		"",
	);
	const [
		mspTwoWeekFUDateCompletedInitials,
		setMspTwoWeekFUDateCompletedInitials,
	] = useState("");
	const [mspFourWeekFUDate, setMspFourWeekFUDate] = useState("");
	const [mspFourWeekFUDateCompleted, setMspFourWeekFUDateCompleted] = useState(
		"",
	);
	const [
		mspFourWeekFUDateCompletedInitials,
		setMspFourWeekFUDateCompletedInitials,
	] = useState("");
	const [mspSixWeekFUDate, setMspSixWeekFUDate] = useState("");
	const [mspSixWeekFUDateCompleted, setMspSixWeekFUDateCompleted] = useState(
		"",
	);
	const [
		mspSixWeekFUDateCompletedInitials,
		setMspSixWeekFUDateCompletedInitials,
	] = useState("");
	const [mspLetterRecievedDate, setMspLetterRecievedDate] = useState("");
	const [mspLetterRecievedInitials, setMspLetterRecievedInitials] = useState(
		"",
	);
	const [mspFaxedInsurance, setMspFaxedInsurance] = useState("");
	const [mspFaxedInsuranceInitials, setMspFaxedInsuranceInitials] = useState(
		"",
	);
	const [mspLetterToAgent, setMspLetterToAgent] = useState("");
	const [mspLetterToAgentInitials, setMspLetterToAgentInitials] = useState("");
	const [mspNotes, setMspNotes] = useState("");

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
				patientEnrollmentDate,
				patientEffectiveDate,
				patientMemberId,
				patientDoctor,
				patientClinic,
				patientNetwork,
				patientCaseNotes,
				patientReferralSource,
				patientLISDate,
				twoWeekFollowUpCall,
				twoWeekFollowUpCallNotes,
				oneMonthFollowUpCall,
				oneMonthFollowUpCallNotes,
				twoMonthFollowUpCall,
				twoMonthFollowUpCallNotes,
				threeMonthFollowUpCall,
				threeMonthFollowUpCallNotes,
				patientReferralDate,
				patientEmail,
				mspStaffNotes,
				mspDateAdded,
				mspStatus,
				mspLevel,
				mspCaseNumber,
				mspStartDate,
				mspEndDate,
				mspQMBNumber,
				mspEDGNumber,
				mspPendingAction,
				mspColorCode,
				mspNewRenewal,
				mspFaxedtoTHHSDate,
				mspFaxedtoTHHSInitials,
				mspConfirmedDate,
				mspConfirmedDateInitials,
				mspDaysFromFaxDate,
				mspTwoWeekFUDate,
				mspTwoWeekFUDateCompleted,
				mspTwoWeekFUDateCompletedInitials,
				mspFourWeekFUDate,
				mspFourWeekFUDateCompleted,
				mspFourWeekFUDateCompletedInitials,
				mspSixWeekFUDate,
				mspSixWeekFUDateCompleted,
				mspSixWeekFUDateCompletedInitials,
				mspLetterRecievedDate,
				mspLetterRecievedInitials,
				mspFaxedInsurance,
				mspFaxedInsuranceInitials,
				mspLetterToAgent,
				mspLetterToAgentInitials,
				mspNotes,
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
			<div class="row g-2">
				<div class="col-md-3">
					<label>Date</label>
					<br></br>
					<input
						type="text"
						onChange={(e) => setInitialDate(e.target.value)}
						value={initialDate}
					/>
				</div>
				<div class="col-md-3">
					<label>Agent</label>
					<br></br>
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
				</div>
				<div class="col-md-3">
					<label>Client Status</label>
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
				</div>
				<div class="col-md-3">
					<label>Type</label>
					<br />
					<select
						value={patientType}
						onChange={(e) => setPatientType(e.target.value)}>
						<option value=""></option>
						<option value="New">New</option>
						<option value="Flip">Flip</option>
						<option value="GIC Flip">GIC Flip</option>
					</select>
				</div>
			</div>

			<div class="row g-2">
				<div class="col-md-3">
					<label>Last Name</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientLastName(e.target.value)}
						value={patientLastName}
					/>
				</div>
				<div class="col">
					<label>First Name</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientFirstName(e.target.value)}
						value={patientFirstName}
					/>
				</div>
				<div class="col">
					<label>Middle Name</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientMiddleName(e.target.value)}
						value={patientMiddleName}
					/>
				</div>
				<div class="col">
					<label>DOB</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientDateOfBirth(e.target.value)}
						value={patientDateOfBirth}
					/>
				</div>
				<div class="col">
					<label>Gender</label>
					<br />
					<select
						value={patientGender}
						onChange={(e) => setPatientGender(e.target.value)}>
						<option value=""></option>
						<option value="F">F</option>
						<option value="M">M</option>
					</select>
				</div>
			</div>

			<div class="row g-2">
				<div class="col">
					<label>Address</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientStreetAddress(e.target.value)}
						value={patientStreetAddress}
					/>
				</div>
				<div class="col">
					<label>City</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientCity(e.target.value)}
						value={patientCity}
					/>
				</div>
				<div class="col">
					<label>Zip</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientZipCode(e.target.value)}
						value={patientZipCode}
					/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col-md-4">
					<label>County</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientCounty(e.target.value)}
						value={patientCounty}
					/>
				</div>
				<div class="col-md-4">
					<label>Phone Number</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientPhoneNumber(e.target.value)}
						value={patientPhoneNumber}
					/>
				</div>
				<div class="col-md-4">
					<label>Alternate Phone Number</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientAlternatePhoneNumber(e.target.value)}
						value={patientAlternatePhoneNumber}
					/>
				</div>
			</div>

			<div class="row g-2">
				<div>
					<label>Email</label>
					<br />
					<input
						type="text"
						onChange={(e) => setPatientEmail(e.target.value)}
						value={patientEmail}
					/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col">
				<label>SS#</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientSSN(e.target.value)}
					value={patientSSN}
				/>
				</div>
				<div class="col">
				<label>Medicare #</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientMedicareNumber(e.target.value)}
					value={patientMedicareNumber}
				/>
				</div>
				<div class="col">
				<label>MC Start Date Part A</label>
				<br />
				<input
					type="text"
					onChange={(e) => setMcStartDate(e.target.value)}
					value={mcStartDate}
				/>
				</div>
				<div class="col">
				<label>MC Start Date Part B</label>
				<br />
				<input
					type="text"
					onChange={(e) => setMcStartDateB(e.target.value)}
					value={mcStartDateB}
				/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col">
				<label>Plan</label>
				<br />
				<select
					value={patientPlan}
					onChange={(e) => setPatientPlan(e.target.value)}>
					<option value="AARP MA HMO">AARP MA HMO</option>
					<option value="AARP MA Secure Horizon HMO">
						AARP MA Secure Horizon HMO
					</option>
					<option value="UHC MA Dual HMO">UHC MA Dual HMO</option>
					<option value="UHC MA Chronic HMO">UHC MA Chronic HMO</option>
					<option value="UHC MA Patriot HMO">UHC MA Patriot HMO</option>
					<option value="AARP MA Choice PPO">AARP MA Choice PPO</option>
					<option value="UHC MA Choice RPPO">UHC MA Choice RPPO</option>
					<option value="UHC Dual Choice RPPO">UHC Dual Choice RPPO</option>
					<option value="UHC MA Gold RPPO">UHC MA Gold RPPO</option>
					<option value="UHC MA Silver RPPO">UHC MA Silver RPPO</option>
					<option value="Humana Gold Plus HMO">Humana Gold Plus HMO</option>
					<option value="Humana Gold Plus HMO D-SNP">
						Humana Gold Plus HMO D-SNP
					</option>
					<option value="Humana Gold Plus Heart & Diabetes HMO">
						Humana Gold Plus Heart & Diabetes HMO
					</option>
					<option value="Humana Choice PPO">Humana Choice PPO</option>
					<option value="Humana RPPO">Humana RPPO</option>
					<option value="Humana Honor PPO">Humana Honor PPO</option>
				</select>
				</div>
				<div class="col">
				<label>Enrollment Date</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientEnrollmentDate(e.target.value)}
					value={patientEnrollmentDate}
				/>
				</div>
				<div class="col">
				<label>Effective Date</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientEffectiveDate(e.target.value)}
					value={patientEffectiveDate}
				/>
				</div>
				<div class="col">
				<label>Member Plan ID</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientMemberId(e.target.value)}
					value={patientMemberId}
				/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col md-4">
				<label>PCP</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientDoctor(e.target.value)}
					value={patientDoctor}
				/>
				</div>
				<div class="col md-4">
				<label>Clinic</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientClinic(e.target.value)}
					value={patientClinic}
				/>
				</div>
				<div class="col md-4">
				<label>Network</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientNetwork(e.target.value)}
					value={patientNetwork}
				/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col">
				<label>LIS Completed</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientLISDate(e.target.value)}
					value={patientLISDate}
				/>
				</div>
				<div class="col">
				<label>Initial</label>
<br></br>
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
				</div>
				<div class="col">
				<label>Referral Source</label>
				<br />
				<input
					type="text"
					onChange={(e) => setPatientReferralSource(e.target.value)}
					value={patientReferralSource}
				/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col-6">
				<label>2 Week Follow Up Call</label>
				<input
					type="text"
					onChange={(e) => setTwoWeekFollowUpCall(e.target.value)}
					value={twoWeekFollowUpCall}
				/>
				<label>Notes</label>
				<input
					type="text"
					onChange={(e) => setTwoWeekFollowUpCallNotes(e.target.value)}
					value={twoWeekFollowUpCallNotes}
				/>
				</div>
				<div class="col-6">
				<label>30 Day Follow Up Call</label>
				<input
					type="text"
					onChange={(e) => setOneMonthFollowUpCall(e.target.value)}
					value={oneMonthFollowUpCall}
				/>
				<label>Notes</label>
				<input
					type="text"
					onChange={(e) => setOneMonthFollowUpCallNotes(e.target.value)}
					value={oneMonthFollowUpCallNotes}
				/>
				</div>
			</div>
			<div class="row g-2">
				<div class="col-6">
				<label>60 Day Follow Up Call</label>
				<input
					type="text"
					onChange={(e) => setTwoMonthFollowUpCall(e.target.value)}
					value={twoMonthFollowUpCall}
				/>
				<label>Notes</label>
				<input
					type="text"
					onChange={(e) => setTwoMonthFollowUpCallNotes(e.target.value)}
					value={twoMonthFollowUpCallNotes}
				/>
				</div>
				<div class="col-6">
				<label>90 Day Follow Up Call</label>
				<input
					type="text"
					onChange={(e) => setThreeMonthFollowUpCall(e.target.value)}
					value={threeMonthFollowUpCall}
				/>
				<label>Notes</label>
				<input
					type="text"
					onChange={(e) => setThreeMonthFollowUpCallNotes(e.target.value)}
					value={threeMonthFollowUpCallNotes}
				/>
				</div>
			</div>

			<div class="row g-2">
				<div class="col">
				<label>Case Notes</label>
				<br />
				<textarea
					type="text"
					onChange={(e) => setPatientCaseNotes(e.target.value)}
					value={patientCaseNotes}
				/>
				</div>
			</div>

			<input type="submit" className="btn btn-primary" value="Add Patient" />
		</form>
	);
};
