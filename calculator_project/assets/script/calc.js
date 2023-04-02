
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
document.getElementById("oper1").value = "";
document.getElementById("Operand2").value = "";
document.getElementById("oper2").value = "";
document.getElementById("oper1").innerHTML = "";
document.getElementById("oper2").innerHTML = "";
document.getElementById("Operand1").innerHTML = "";
document.getElementById("Operand2Error").innerHTML = "";
document.getElementById("rdMin").innterHTML=""
document.getElementById("AvgOperator").checked = false;
document.getElementById("OperatorError").innerHTML = "";
document.getElementById("Result").innerHTML = "";
}
/* This should validate the form */
$( "#RadioExampleValidationCheckForm" ).validate({

});
