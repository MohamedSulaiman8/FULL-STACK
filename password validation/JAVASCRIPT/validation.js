function validate(){
    var Firstname=document.form1.firstname.value;
    var Lastname=document.form1.lastname.value;
    var Username=document.form1.username.value;
    //validating first name and last name
    if(Firstname==null || Firstname=="" || Lastname==null || Lastname=="" || Username==null|| Username==""){
        alert("FIRSTNAME,LASTNAME AND USERNAME CANNOT BE NULL");
        return false;
    }
    //validating password
    var Password=document.form1.password.value;
    var Confirm=document.form1.confirm.value;
    if(Password!=Confirm){
        alert("PASSWORD DOES NOT MATCH");
        return false;
    }
    if(Password.length<6 || Password.search(/[A-Z]/) <0 || Password.search(/[0-9]/)<0 ){
        alert("PASSWORD SHOULD CONTAIN MINIMUM 8 CHARACTERS,ONE UPPERCASE CHARACTER AND A NUMBER");
        return false;
    }
    if(Password.length==6){
        
    }
  
     //validating phone number
    var Num=document.form1.num.value;
    if(isNaN(Num) || Num==null || Num==""){
        alert("PHONE NUMBER CAN CONTAIN ONLY NUMBERS")
        return false;
    }
    var e=document.form1.em.value;
    var atposition=e.indexOf("@");
    var dotposition=e.lastIndexOf(".");
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=e.length ||e==null||e==""){
        alert("Please enter a valid e-mail address\natpostion:"+atposition+"\ndotposition:"+dotposition);
        return false;
    } 
}

