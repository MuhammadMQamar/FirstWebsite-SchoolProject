$(function(){
	
	$("#username_error_message").hide();
	$("#password_error_message").hide();
	$("#retype_password_error_message").hide();
	
	var error_username = false;
	var error_password = false;
	var error_retype_password = false;
	
	var name_regex =/^[a-zA-Z]+[0-9]/;
	var password_regex =/^[a-zA-Z](?=.*\d)(?=.*\W).{8,16}/;
	
	
	
	
	
	$("#username").focusout(function(){
		
		check_username();
	});
	
	$("#psw").focusout(function(){
		
		check_password();
	});
	
	$("#psw-repeat").focusout(function(){
		
		check_retype_password();
	});
	
	function check_username(){
		
		var username_val= $("#username").val();
		
		if(!username_val.match(name_regex)){
			$("#username_error_message").show();
			$("#username_error_message").html("Invalid User name");
			
			$("#username_error_message").focus();
			$("#username_error_message").css("color","red");
			error_username = true;
		}
		else{
			$("#username_error_message").hide();
		}
	}
	
	function check_password(){
		
		var password_val= $("#psw").val();
		
		if(!password_val.match(password_regex)){
			
			
			$("#password_error_message").show();
			$("#password_error_message").html("Invalid Password");
			
			$("#password_error_message").focus();
			$("#password_error_message").css("color","red");
			error_password = true;
		}
	
		else{
			$("#password_error_message").hide();
		}
	}
	
	function check_retype_password(){
		var password_val= $("#psw").val();
		var password_retype_val= $("#psw-repeat").val();
		
		if(password_retype_val != password_val){
			
			$("#retype_password_error_message").show();
			$("#retype_password_error_message").html("Invalid repeat password");
			
			$("#retype_password_error_message").focus();
			$("#retype_password_error_message").css("color","red");
			error_password = true;
		}
		else{
			$("#retype_password_error_message").hide();
		}
	}
	
	$("#registration").submit(function(){
		
		error_username = false;
		error_password = false;
		error_retype_password = false;
		
		check_username();
		check_password();
		check_retype_password();
		
		if(error_username== false && error_password == false && error_retype_password == false)
		{
			return true;
		}
		else{
			return false;
		}
		
	});
});