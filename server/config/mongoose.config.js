const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/gic_patient_db", { 
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true,
// })

//Added
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });	
	
/* mongoose.connect("mongodb+srv://user13:user13@cluster0.udwtc.mongodb.net/myFirstDatabase" , { 
	useNewUrlParser: true,
	useUnifiedTopology: true,
}) */
	.then(() => console.log("Connected to the gic_patient_db")) 
	.catch(err => console.log("Something went wrong when connecting to the gic_patient_db", err));