//extract all nodes via their ids
const mobileNoNode=$("#mobile-no");
const doctornameNode=$("#doctor-name");
const appointmentdateNode=$("#appointment-date");
const patientnameNode=$("#patient-name");
const errorNode1=$("#mobile-no-error");
const errorNode2=$("#doctor-name-error");
const errorNode3=$("#appointment-date-error");
const errorNode4=$("#patient-name-error");
//add blur
//extract val()s from nodes


mobileNoNode.on("blur",()=>validate1())
const validate1=function(){
    const mobileno=mobileNoNode.val();
    console.log(mobileno);
    errorNode1.text("")
    if(mobileno==""){
        errorNode1.text("mobile Number is required")
        return false;
    }       
    else if(mobileno.length<10 || mobileno.length>10){
        errorNode1.text("Required 10 Digits..")
        return false
    }
    else if(isNaN(mobileno))
    {
        errorNode1.text("Enter only Number")
        return false;
    }
    else{
        return true;
    }
}

doctornameNode.on("blur",()=>validate2())
const validate2=function(){
    const doctorname=doctornameNode.val();
    console.log(doctorname);
    errorNode2.text("")
    if(doctorname==""){
        errorNode2.text("doctor name is required")
        return false;
    }
    else if(doctorname.length>20){
        errorNode2.text("Please Enter Valid doctorname")
        return false;
    }
    else if(!doctorname.match("[A-Za-z]")){
        errorNode2.text("Please Enter Valide doctorname")
        return false;
    }
    else{
        return true;
    }
    
}

appointmentdateNode.on("blur",()=>validate3())
const validate3=function(){
    const appointmentdate=appointmentdateNode.val();
    console.log(appointmentdate);
    errorNode3.text("")
    if(appointmentdate==""){
        errorNode3.text("appointmentdate is required")
        return false;
    }
    else{
        return true;
    }
}

patientnameNode.on("blur",()=>validate4())
const validate4=function(){
    const patientname=patientnameNode.val();
    console.log(patientname);
    errorNode4.text("")
    if(patientname==""){
        errorNode4.text("patientname name is required")
        return false;
    }
    else if(patientname.length<2){
        errorNode4.text("Please Enter Valid patientname")
        return false;
    }
    else if(!patientname.match("[A-Za-z]")){
        errorNode4.text("Please Enter Valid patientname")
        return false;
    }
    else{
        return true;
    }
    
}


$("#appointment-form").submit(()=>validateAll())
function validateAll(){

    //if all fields are valid then we will return true else we will return false
    const r1=validate1();
    const r2=validate2();
    const r3=validate3();
    const r4=validate4();
    
    return r1 && r2 && r3 && r4 ;
};
