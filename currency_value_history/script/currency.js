async function Results(){
    "use strict";

    //reference
    var form = $("#myform");

    //validation 
    form.validate();

    if (form.valid()){
        var BaseCurrency = document.getElementById("BaseCurrency").value;
        var ConvertCurrency = document.getElementById("ConvertCurrency").value;
        var apiKey = "p6eOpJSiNUpmSfOT6UYEkaWhKSWCtsPJ"
        var FromDate = document.getElementById("FromDate").value;
        var ToDate = document.getElementById("ToDate").value;

        
        var myURL2 = "https://api.polygon.io/v2/aggs/ticker/C:"  + BaseCurrency + ConvertCurrency + "/range/1/day/" + FromDate + "/" + ToDate + "?adjusted=true&sort=asc&limit=32&apiKey=" + apiKey;
        var msg2Object = await fetch(myURL2);

        if (msg2Object.status >= 200 && msg2Object.status <= 299) {   
            var msg2JSONText = await msg2Object.text();

            var msg2 = JSON.parse(msg2JSONText);

            var currencydate = [];
            var currencyvalue = [];
            
            var numdays = msg2.results.length;
            if (numdays > 0) {
                for (var i = 0; i < numdays; i++) {
                    currencyvalue[i] = msg2.results[i].c;
                    var tempdate = new Date(msg2.results[i].t);
                    currencydate[i] = tempdate.toLocaleDateString();
                }
        }




var ctx0 = document.getElementById("chartjs-0");
var myChart = new Chart(ctx0, {
    "type":"line",
    "data": {
        "labels": currencydate,
        "datasets":[{"label":"Currency Close",
        "data": currencyvalue,
        "fill":false,
        "borderColor":"rgb(75, 192, 192)",
        "lineTension":0.1}]},
        "options":{ 
            responsive: false,
            maintainAspectRatio: true,
        }
    }
);


} else {
    alert("Stock Not Found - Status: " + msg2Object.status)
    return
}
}

}

function clearForm() {
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