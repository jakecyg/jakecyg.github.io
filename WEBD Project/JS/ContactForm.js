/*
    ContactForm.js
    Grab relevant IDs and Claases from Contacts.html
    Validates input information.
    Only sends the form if all fields are valid.
    Display proper error message for fields with invalid input.

    Jake Choi
    04.01.2019
*/
 
//validates the form input.
//prevent sumbission if error found.
function validate(e)
{
	hideErrors();

	if(formHasErrors())
	{
		e.preventDefault();
		return false;
	}

	return true;
}

//Resets all input field and focuses to the first input field.
function resetForm(e)
{
	if ( confirm('Clear form?') )
	{
		hideErrors();
		
		document.getElementById("fullName").focus();

		return true;
	}

	e.preventDefault();

	return false;	
}


//Display error messages for each invalide input field and raise error flag.
//Focus and select the first error flag found.
function formHasErrors()
{
	let errorFlag = false;

	let requiredFields = ["fullName", "phone"];

	for(let i = 0; i < requiredFields.length; i++)
	{
		if(document.getElementById(requiredFields[i]).value == null || document.getElementById(requiredFields[i]).value =="")
		{
			document.getElementById(requiredFields[i] + "_error").style.display = "block";

			if(!errorFlag)
			{
				document.getElementById(requiredFields[i]).focus();
				document.getElementById(requiredFields[i]).select();
			}
			errorFlag = true;
		}
	}

	let regexPhone = new RegExp(/^\d{10}$/);

	let phoneNumber = document.getElementById("phone").value;

	if(!regexPhone.test(phoneNumber) && phoneNumber != "")
	{
		document.getElementById("phoneFormat_error").style.display = "block";

		if(!errorFlag)
		{
			document.getElementById("phone").focus();
			document.getElementById("phone").select();			
		}

		errorFlag = true;
	}

	let regexEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
	let emailAddress = document.getElementById("email").value;

	if(emailAddress == "")
	{
		document.getElementById("email_error").style.display = "block";

		if(!errorFlag)
			{
				document.getElementById("email").focus();
				document.getElementById("email").select();
			}
		errorFlag = true;
	}

	if(emailAddress != "" && !regexEmail.test(emailAddress))
	{
		document.getElementById("emailFormat_error").style.display = "block";

		if(!errorFlag)
			{
				document.getElementById("email").focus();
				document.getElementById("email").select();
			}		
		errorFlag = true;
	}

	let message = document.getElementById("message").value;
	if(message == null || message == "" )
	{
		document.getElementById("message_error").style.display = "block";

		if(!errorFlag)
			{
				document.getElementById("message").focus();
				document.getElementById("message").select();
			}		
		errorFlag = true;
	}
	return errorFlag;
}

//Hide all error messages.
function hideErrors()
{
	let errorFields = document.getElementsByClassName("error");
	
	for(let i = 0; i < errorFields.length; i++)
	{
		errorFields[i].style.display = "none";
	}
}

//Add click event listeners for the submit and reset buttons
function load()
{
	document.getElementById("submit").addEventListener("click", validate);
	document.getElementById("clear").addEventListener("click", resetForm);
}

//Call load and hideErrors function upon DOM content loaded.
document.addEventListener("DOMContentLoaded", load);
document.addEventListener("DOMContentLoaded", hideErrors);













