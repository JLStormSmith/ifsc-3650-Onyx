$("#myform").validate({

}); 



function calculate() {
    if ($("#myform").valid()){
        document.getElementById("oper1").innterHTML = "";
        
        document.getElementById("oper2").innterHTML = "";

    
    if (document.getElementById("rdPlus").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdPlus").value;
    }
    if (document.getElementById("rdMin").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdMin").value;
    }
    if (document.getElementById("rdMult").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdMult").value;
    }
    if (document.getElementById("rdDiv").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdDiv").value;
    }

    var oper1;
    var oper2;

    var rdPlus;
    var rdMin;
    var rdMult;
    var rdDiv;
    var result;
}
}



function clearForm(){
/* Clears the whole screen and sets all the boxes to blank */
document.getElementById("Operand1").value = "";
    document.getElementById("Operand1Msg").innerHTML = "";
    document.getElementById("AddOperator").checked = false;
    document.getElementById("SubtractOperator").checked = false;
    document.getElementById("MultiplyOperator").checked = false;
    document.getElementById("DivideOperator").checked = false;
    document.getElementById("OperatorMsg").innerHTML = "";
    document.getElementById("Operand2").value = "";
    document.getElementById("Operand2Msg").innerHTML = "";
    document.getElementById("Result").innerHTML = "";
}
/* This should validate the form */
$( "#RadioExampleValidationCheckForm" ).validate({

});
