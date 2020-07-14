// DECLARING VARIABLES 
// Declare variables that will
// store references for 
// <input type="button" id="submit-button">,
// <input type="text" id="fullname">,
// <input type="text" id="email">
// <textarea id="message"></textarea>

let submitButton = document.getElementById("submit");
let fullName = document.getElementById("fullname");
let eMail = document.getElementById("email");
let message = document.getElementById("message");

// Declare variable that will 
// store regular expression for email
let regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// READY TO START CODING
// Start with your function here
// (come up with the meaningful name).
function validateForm(event){

       
    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
	event.preventDefault();
	let formData = {};
	let formErrors = [];

    // Check if fullname is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.
    if(fullName.value !== ""){
    	formData['fullname'] = fullName.value;
    }else{
    	formErrors.push({fullname : "Full name is missing."});
    }


    // Check if email is not empty.
       // Check if email is valid.
       // If so:
          // Pass the collected value
          // to your object "data".
       // Otherwise:
          // Create a corresponding error-message
          // and add it to your array "errors".
       // End your nested conditional here.
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your outer conditional here.
    if(eMail.value !== ""){
    	if (regex.test(eMail.value)){
    		formData['email'] = eMail.value;
    	}else{
    		formErrors.push({email: "Invalid email!"});
    	}
    }else{
    	formErrors.push({email: "Email is missing."});
    }

    // Check if message is not empty.
    // If so:
       // Pass the collected value
       // to your object "data".
    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors"
    // End your conditional here.
    if(message.value !== ""){
    	formData['message'] = message.value;
    }else{
    	formErrors.push({message: "Message is missing."});
    }


    // Check if there is anything in array errors
       // If so: 
       // Print it in JavaScript console.
    // Otherwise:
       // Print the data in JavaScript console.
       // Clear text-fields
    // End your conditional here.
    if(formErrors.length > 0){
    	console.log(formErrors);
    }else{
    	console.log(formData);
    	fullName.value = "";
    	eMail.value = "";
    	message.value = "";
    }

    //or
    if(formErrors.length >= 1){
    	console.log(formErrors);
    }else{
    	console.log(formData);
    	document.getElementById("fullname").value = "";
    	document.getElementById("email").value = "";
    	document.getElementById("message").value = "";
    }


// Close your function here
}
    
// Register your form to "click" event.
submitButton.addEventListener("click", validateForm);
