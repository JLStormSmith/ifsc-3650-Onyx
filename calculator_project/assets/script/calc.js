
function calculate() {
    if ($("#myform").valid()){
        document.getElementById("oper1").innterHTML = "";
        document.getElementById("oper2").innterHTML = "";

    
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
    if (document.getElementById("rdDodge").checked) {
        document.getElementById("RadioExampleValue").innerHTML = 
            document.getElementById("rdDodge").value;
    }
}
}

function clearForm(){
/* Clears the whole screen and sets all the boxes to blank */
document.getElementById("oper1").value = "";
document.getElementById("Operand2").value = "";
document.getElementById("oper2").value = "";
document.getElementById("oper1").innerHTML = "";
document.getElementById("oper2").innerHTML = "";
document.getElementById("Operand2Error").innerHTML = "";
document.getElementById("MinOperator").checked = false;
document.getElementById("MaxOperator").checked = false;
document.getElementById("AvgOperator").checked = false;
document.getElementById("OperatorError").innerHTML = "";
document.getElementById("Result").innerHTML = "";
}
/* This should validate the form */
$( "#RadioExampleValidationCheckForm" ).validate({

});
