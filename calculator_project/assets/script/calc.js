
function calculate() {
    if ($("#calcform").valid()){

        //gets the operands
        var operand1 = document.getElementById("Operand1").value;
        var operand2 = document.getElementById("Operand2").value;
        
        var operand1fp = parseFloat (operand1);
        var operand2fp = parseFloat (operand2);
        
        var operator;
        if (document.getElementById("AddOperator").checked) {
            operator = document.gettElementById("AddOperator").value;
        }
        if (document.getElementById("SubtractOperator").checked) {
            operator = document.gettElementById("SubtractOperator").value;
        }
        if (document.getElementById("MultiplyOperator").checked) {
            operator = document.gettElementById("MultiplyOperator").value;
        }
        if (document.getElementById("DivideOperator").checked) {
            operator = document.gettElementById("DivideOperator").value;
        }
        var result;
//calculate the operators
        if (operator == "+"){
           result = operand1fp + operand2fp;

        }
        if (operator == "-"){
           result = operand1fp - operand2fp;

        }
        if (operator == "*"){
           result = operand1fp * operand2fp;

        }
        if (operator == "/"){
            result = operand1fp / operand2fp;

        }
        document.getElementById("Result").innterHTML = result.toString();


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

$("#calcForm").validate({

}); 
