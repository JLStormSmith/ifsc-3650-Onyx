async function search(){
    let Rover = $('input[name="Rover"]:checked').val();
    let date = $('#Date').val();

    makeAPICall(Rover, date);
}