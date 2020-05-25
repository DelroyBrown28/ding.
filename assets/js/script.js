$(document).ready(function () {

    $('.choice_car').click(function () {
        document.getElementById('car_text').innerHTML = "Great, got it.";
    }, function() {
        $('.button').fadeOut()
    })

    $('.choice_van').click(function () {
        document.getElementById('van_text').innerHTML = "Great, got it.";
    })

    $('.choice_bike').click(function () {
        document.getElementById('bike_text').innerHTML = "Great, got it.";
    })



    // Animates 'next' button

    
});