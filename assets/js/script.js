$(document).ready(function () {

    function windowLoad() {
        $('.tap_to_select, .main_title').animate({
            opacity: "1",
        });
        $('.swipe_up_popup').delay(500).fadeIn(4000);
    }
    window.onload = windowLoad;

    setTimeout(function () {
        $('.swipe_up_popup').fadeOut(1000);
    }, 4000);

    

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

    $('.button').click( function() {
        $(this).animate({
            width: '100px',
        }, 200,function() {
            $('.arrow_next_icon').animate({
                left: '100%'
            }, function () {
                location.href = 'nothinghereyet.html';
            })
        })
    })

    // Animates text

    new TypeIt('.pick_vehicle_title', {
        strings: "What are we cleaning?",
        speed: 75,
        loop: false,
        cursor: false,
    }).go();


});