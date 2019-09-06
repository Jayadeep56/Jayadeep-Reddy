function validate(){
    var formname = document.forms["signup"];
    var Fname = formname['Fname'].value;
    var Lname = formname['Lname'].value;
    var Email = formname['Email'].value;
    var MobNumber = formname['MobNumber'].value;
    var Password = formname['Password'].value;
    var RePassword = formname['RePassword'].value;
//     // if(Fname=="" || Lname=="" || Email=="" || MobNumber=="" || Password=="" || RePassword=="" ){
//     //     alert("Content cannot be left Empty");
//     //     return false;
//    }
document.getElementById("Fname").innerHTML=Fname;
document.getElementById("Lname").innerHTML=Lname;
document.getElementById("Email").innerHTML=Email;
document.getElementById("MobNumber").innerHTML=MobNumber;
}

var a = setInterval(validate,30);



