async function ShowResuts(){
    "use strict";

    //reference
    var form =$("#myform");

    //validation 
    form.validate();

    if (form.valid()){
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var ConvertCurrency = document.getElementById("ConvertCurrency").value;
        var apiKey = "p6eOpJSiNUpmSfOT6UYEkaWhKSWCtsPJ"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        
    }

}
function SelectExample() 
{
    document.getElementById("SelectExampleValue").innerHTML = document.getElementById("selAuto").value;

    var ctx = document.getElementById("chartjs-0");

    var myChart = new Chart(ctx, {
        "type":"line",
        "data": {
            "labels": dates,
            "datasets":[{
                "data": values,
                fill: false
            }]
        },
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
        }
    });


}

function ClearForm() {
    document.getElementById("BaseCurrency").value = "";
    document.getElementById("ConvertCurrency").value = "";
    document.getElementById("FromDate").value = "";
    document.getElementById("ToDate").value = "";
    
    document.getElementById("ToDateError").innerHTML = "";
    document.getElementById("FromDateError").innerHTML = "";
    
    /* Ugly Code to Erase Canvas */
    var canvas0 = document.getElementById("chartjs-0");
    var context0 = canvas0.getContext('2d');    
    context0.clearRect(0, 0, canvas0.width, canvas0.height);
    
}