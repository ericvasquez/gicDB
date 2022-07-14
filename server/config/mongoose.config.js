const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/gic_patient_db", { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Connected to the gic_patient_db")) 
	.catch(err => console.log("Something went wrong when connecting to the gic_patient_db", err));