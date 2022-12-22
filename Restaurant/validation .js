var rega=/[A-Z]/;
var reg=/[0-9]/;
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
//PASSWORD STRENGTH
function strengthValidate(){
    var Passwords=document.form1.password.value;
    if(Passwords.length==6){
        document.getElementById("strength").innerHTML="Password is weak";
        document.getElementById("strength").style.color="red";
        document.getElementById("strength-description").innerHTML="*Your password is too small or contains not more than one uppercase letters or numbers*";
    }
    else if(Passwords.length>6){
        if(Passwords.match(/[A-Z]/g).length >1){
        document.getElementById("strength").innerHTML="Password is medium";
        document.getElementById("strength").style.color="orange";
        document.getElementById("strength-description").innerHTML="*Your password does not contain more than one numeric*";
        }
        if(Passwords.match(/[A-Z]/g).length >1 && Passwords.match(/[0-9]/g).length>1 ){
            document.getElementById("strength").innerHTML="Password is strong";
            document.getElementById("strength").style.color="green";
            document.getElementById("strength-description").innerHTML="";
    }
    } 
}

//Events
function mouseOver(){
    document.getElementById("next").style.backgroundColor="skyblue";

}
function mouseOut(){
    document.getElementById("next").style.backgroundColor="white";
}
function pageLoad(){
    alert("ENTER THE CORRECT DETAILS");
}
function onFocuss(){
    document.getElementById("text").style.backgroundColor="lightgreen";
}
function onFocus(){
    document.getElementById("confirm").style.backgroundColor="lightgreen";
}
