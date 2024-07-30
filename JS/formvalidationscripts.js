// Form validation for appointment form
//Mobile Number Validation
const mobilenumberNodes=document.getElementById("mobile-no");
const errorNode1=document.getElementById("mobile-no-error");
mobilenumberNodes.addEventListener("blur",()=>validate1())
const validate1=function(){
    errorNode1.textContent=""
    const mobileNo=mobilenumberNodes.value;
    console.log(mobileNo);
    if(mobileNo==""){
        errorNode1.textContent="Mobile Number is required";
        return false;
    }
    else if(isNaN(mobileNo)){
        errorNode1.textContent="Enter only Number";
        return false;
    }
    else if(mobileNo.length<10 || mobileNo.length>10){
        errorNode1.textContent="Required 10 Digits..";
        return false;
    }
    else{
        return true;
    }
}


//doctors name validation
const doctorNameNodes=document.getElementById("doctor-name");
const errorNode2=document.getElementById("doctor-name-error");
doctorNameNodes.addEventListener("blur",()=>validate2())
const validate2=function(){
    errorNode2.textContent=""
    const doctorname=doctorNameNodes.value;
    console.log(doctorname);
    if(doctorname==""){
        errorNode2.textContent="Doctor name is required";
        return false;
    }
    else{
        return true
    }
}

//appointment date validation
const appointmentDateNodes=document.getElementById("appointment-date");
const errorNode3=document.getElementById("appointment-date-error");
appointmentDateNodes.addEventListener("blur",()=>validate3())
const validate3=function(){
    errorNode3.textContent=""
    const appointmentdate=appointmentDateNodes.value;
    console.log(appointmentdate);
    if(appointmentdate==""){
        errorNode3.textContent="Appointment Date is required";
        return false;
    }

    else{}
        return true
    }



//patient name validation
const patientNameNodes=document.getElementById("patient-name");
const errorNode4=document.getElementById("patient-name-error");
patientNameNodes.addEventListener("blur",()=>validate4())
const validate4=function(){
    errorNode4.textContent=""
    const patientname=patientNameNodes.value;
    console.log(patientname);
    if(patientname==""){
        errorNode4.textContent="Patient Name is required";
        return false;
    }
    else if(patientname.length<2){
        errorNode4.textContent="Please Enter Valid name";
        return false;
    }
    else if(!patientname.match("^[A-Za-z]*$")){
        errorNode4.textContent="please enter only Characters...";
        return false;
    }

    else{
        return true
    }

}

function validateAll(){
    const r1=validate1();
    const r2=validate2();
    const r3=validate3();
    const r4=validate4();
    return r1 && r2 && r3 && r4;
}
