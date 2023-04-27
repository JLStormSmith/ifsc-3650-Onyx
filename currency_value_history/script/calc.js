async function ShowResuts(){
    "use strict";

    //reference
    var form =$("#myform");

    //validation 
    form.validate

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


$( "#SelectExampleDOMForm" ).validate({

});