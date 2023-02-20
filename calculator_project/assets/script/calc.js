
function calculate() {
    if ($("#myform").valid()){

    
    if (document.getElementById("rdChevrolet").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdChevrolet").value;
    }
    if (document.getElementById("rdFord").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdFord").value;
    }
    if (document.getElementById("rdDodge").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdDodge").value;
    }
}
}

function clearForm(){
/* Clears the whole screen and sets all the boxes to blank */
document.getElementById("Operand1").value = "";
document.getElementById("Operand2").value = "";
document.getElementById("Operand3").value = "";
document.getElementById("Operand1Error").innerHTML = "";
document.getElementById("Operand2Error").innerHTML = "";
document.getElementById("Operand3Error").innerHTML = "";
document.getElementById("MinOperator").checked = false;
document.getElementById("MaxOperator").checked = false;
document.getElementById("AvgOperator").checked = false;
document.getElementById("OperatorError").innerHTML = "";
document.getElementById("Result").innerHTML = "";
}
/* This should validate the form */
$( "#RadioExampleValidationCheckForm" ).validate({

});
