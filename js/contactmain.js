//Client Side Form Validation..
var validated= ["error","error","error","error"]; //if validation is complete!

//Dom node variables initialization..

var form =
{
	reg : document.getElementById("reg"),
	name: document.getElementById("name"),
	email: document.getElementById("email"),
	phone: document.getElementById("phone"),
	message: document.getElementById("message") 

};

//Functions to account for  change in fields...
form.name.onchange = function() {forname()};
form.email.onchange = function() {foremail()};
form.phone.onchange = function() {forphone()};
form.message.onchange = function() {formessage()};
form.message.onfocus = function() {focusmessage()};


form.reg.addEventListener("submit", CheckForm); //submit listener...

//object validations...
function forname() 
{
	document.getElementById("incomp").innerHTML ="";
	var curr=form.name;

	//regex for name...
	var regexname=/^[a-zA-Z ]+$/;
	if(regexname.test(curr.value))
	{
		document.getElementById("nerror").innerHTML = "";
		curr.value= form.name.value.toUpperCase();
    	curr.style.color="green";
    	validated[0]="name";
	}
	else if(!curr.value)
	{
		document.getElementById("nerror").innerHTML= "Name is required!";
		curr.style.color="";
	}
	else
	{
		document.getElementById("nerror").innerHTML= "Only letters and spaces allowed!";
		curr.style.color="";
		setTimeout(function(){clear("name");}, 4);
		validated[0]="error";
 	}    
}

function foremail() 
{
	document.getElementById("incomp").innerHTML ="";
    var curr=form.email;
    //regex for email..
	var regexemail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(regexemail.test(curr.value))
	{
		document.getElementById("eerror").innerHTML = "";
		curr.style.color="green";
		validated[1]="email";
	}
	else if(!curr.value)
	{
		document.getElementById("eerror").innerHTML= "Email is required!";
		curr.style.color="";
	}
	else
	{
		document.getElementById("eerror").innerHTML= "Invalid email !! (Ex: abc@xyz.com)";
		curr.style.color="red";
		setTimeout(function(){clear("email");}, 4);
		validated[1]="error";
	}
}

function forphone() 
{
	document.getElementById("incomp").innerHTML ="";
    var curr=form.phone;

    //regex phone..
    var regexphone= /^\d{10}$/;

    if(regexphone.test(curr.value))
    {
    	document.getElementById("perror").innerHTML = "";
		curr.style.color="green";
		validated[2]="phone";
    }
    else if(!curr.value)
	{
		document.getElementById("perror").innerHTML= "Contact No. is required!";
		curr.style.color="";
	}
    else
    {
    	document.getElementById("perror").innerHTML= "Invalid Contact !! (Ex: 9876543210)";
		curr.style.color="red";
		setTimeout(function(){clear("phone");}, 4);
		validated[2]="error";
    }
}

function formessage() 
{
	document.getElementById("incomp").innerHTML ="";
    var curr=form.message;
    if(curr.value== '')
    {
    	document.getElementById("mreq").innerHTML="";
    	document.getElementById("merror").innerHTML= "Message is Required!";
    	curr.color.style="red";
    	validated[3]="error";
    }
    else
    {
    	document.getElementById("merror").innerHTML= "";
    	document.getElementById("mreq").innerHTML="";
    	curr.value=toTitleCase(curr.value);
    	validated[3]="message";
    }
}

function focusmessage()
{
	document.getElementById("incomp").innerHTML ="";
	document.getElementById("merror").innerHTML= "";
	document.getElementById("mreq").innerHTML= "Please give your suggestions :) !!";
}

//function to clear input field if error..
function clear(s)
{
	document.getElementById("incomp").innerHTML ="";
	if(s=="name")
	{
		form.name.value="";
		form.name.style.color="";
		// alert("debug");
	}

	else if(s=="email")
	{
		form.email.value="";
		form.email.style.color="";
		// alert("debugss");
	}
	else
	{
		form.phone.value="";
		form.phone.style.color="";
		// alert("debugpp");
	}
}

//function to change message in paragraph form..
function toTitleCase(str){
  var smallWords = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;
	var str = str.toLowerCase()
  return str.replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g, function(match, index, title){
    if (index > 0 && index + match.length !== title.length &&
      match.search(smallWords) > -1 && title.charAt(index - 2) !== ":" &&
      (title.charAt(index + match.length) !== '-' || title.charAt(index - 1) === '-') &&
      title.charAt(index - 1).search(/[^\s-]/) < 0) {
      return match.toLowerCase();
    }

    if (match.substr(1).search(/[A-Z]|\../) > -1) {
      return match;
    }

    return match.charAt(0).toUpperCase() + match.substr(1);
  });
};

function CheckForm(e) 
{
	if(validated[0] =="error" || validated[1] =="error" || validated[2] =="error" || validated[3] =="error")
	{
		document.getElementById("incomp").innerHTML = "Incomplete Form Data!!";

		document.getElementById("merror").innerHTML= "";
		document.getElementById("mreq").innerHTML= "";
		document.getElementById("eerror").innerHTML="";
		document.getElementById("nerror").innerHTML="";
		document.getElementById("perror").innerHTML="";
		
		e.preventDefault();
	}
}
