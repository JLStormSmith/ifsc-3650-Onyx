<script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/jquery.validate.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.1/dist/additional-methods.min.js"></script><style>
   .error {
        color: red;
        padding-left: 5px;
   }
</style>
<form id="RadioExampleValidationCheckForm" onsubmit="return false">
<input type="submit" value="RadioExample" name="RadioButton" onclick="RadioExample()"/>
<label>Cars: </label>
<label for="rdChevrolet"><input type="radio" id="rdChevrolet" name="rdcar" value="Chevrolet" 
    data-rule-required="true" data-msg-required="Car is Required" />Chevrolet</label>
<label for="rdFord"><input type="radio" id="rdFord" name="rdcar" value="Ford" />Ford Motor</label>
<label for="rdDodge"><input type="radio" id="rdDodge" name="rdcar" value="Dodge" />Dodge Ram</label>
<label for="rdcar" class="error"></label>
<span id="RadioExampleValue"></span>
<br>
</form>
<script>
function RadioExample() {
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

$( "#RadioExampleValidationCheckForm" ).validate({

});
</script>