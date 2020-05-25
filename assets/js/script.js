$(document).ready(function () {

    $('.choice_car').click(function () {
        document.getElementById('car_text').innerHTML = "Great, got it.";
    })

    $('.choice_van').click(function () {
        document.getElementById('van_text').innerHTML = "Great, got it.";
    })

    $('.choice_bike').click(function () {
        document.getElementById('bike_text').innerHTML = "Great, got it.";
    })



    // Animates 'next' button

    $('.slide_wrap').click(function() {
        $(this).animate({
            height:  '25px'
        },300, function() {
            $('.next').fadeOut();
        })
        $('.fa-car-side').css('visibility', 'visible');
        $('.fa-car-side').animate({
            left: '100%'
        }, function() {
            $('.follow_car_box').animate({
                width: '100%',
            })
        })
        
    })
});