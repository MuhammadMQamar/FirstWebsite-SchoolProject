function validation(){

var email = document.getElementById("email").value;
var ifother = document.getElementById("ifOther").value;
var lastname = document.getElementById("lastName").value;
var firstname = document.getElementById("firstName").value;
var phone = document.getElementById("phone").value;
var subject = document.getElementById("subject").value;
var comments = document.getElementById("comments").value;

var checkboxfield = document.getElementById("checkboxfield");
var count = 0;

 
 for(i=0;i<checkboxfield.length;i++){
	 
	if( checkboxfield[i].checked){
		count++;
	}
	 
 }

 if(email.indexOf("@") == -1){

	alert("Please Enter Valid Email Address");
	
	 return false;
 
 }
 
 if(count<0){
	 alert("Please check checkbox");
	
	 return false; 
	 
 }
  if(checkboxfield2==""){
	 alert("Please check checkbox");
	
	 return false; 
	 
 }
  if(checkboxfield3==""){
	 alert("Please check checkbox");
	
	 return false; 
	 
 }


 if(ifother.length <5){
	 
	alert("Please Enter more than 5 letters"); 
	 return false;
 
 }
 
 if(lastname.length <3){
	 
	alert("Please Enter Valid Last Name");
	 return false;
 
 }
 
 if(firstname.length <2){

	alert("Please Enter Valid First Name");
	 return false;
 
 }
 
 if(isNaN(phone) || phone.length != 10){

	alert("Please Enter Valid Phone Number");
	 return false;
 
 }
  if(subject.length <5){
	
	alert("Please write Valid Subject");
	 return false;
 
 }
 
 if(comments.length <10){
	
	alert("Please write more than 10 letters");
	 return false;
 
 }
else

 return true;
}
