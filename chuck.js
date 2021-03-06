$(document).ready(function() {
    var URL = 'https://api.icndb.com/jokes/random'
        //state object
    var musicPlaying = true;
    var shown = true;
    //state modification


    //rendering functions
    var audio = new Audio('./public/bang.mp3');
    var chuckSong = new Audio('./public/ChuckSong.mp3');

    $('#js-name-form').hide();

    //event listeners
    //1)image 'button' with AJAX 'get'
    $('#js-fist').on('click', function() {
        audio.play();
        $.ajax({
            url: URL,
            data: {
                format: 'json'
            },
            error: function() {
                $('#js-quotes').show().html('<p>Our Kung Fu has encountered an error</p>');
            },
            success: function(doj) {
                $("#js-quotes").show().html('<p>' + doj.value.joke + '</p>');

            },
            type: 'GET'
        });
    });
    $('.js-master').on('click', function() {
        shown = !shown;
        if (shown) {
            $('#js-name-form').hide();
        } else {
            $('#js-name-form').show();
        }
    });

    $('#playButton').on('click', function($) {
        musicPlaying = !musicPlaying;
        if (musicPlaying) {
            chuckSong.pause();
        } else {
            chuckSong.play();
        }
    });


    //2)name input
    $('#js-name-form').on('submit', function(event) {
        event.preventDefault();
        var first = $('.js-first-name').val();
        var last = $('.js-last-name').val();
        var nameURL = URL + '?firstName=' + first + '&lastName=' + last;
        // console.log(nameURL);
        audio.play();
        $.ajax({
            url: nameURL,
            data: {
                format: 'json'
            },
            error: function() {
                $('#js-quotes').html('<p>Our Kung Fu has encountered an error</p>');
            },
            success: function(data) {
                $("#js-quotes").html('<p>' + data.value.joke + '</p>');

            },
            type: 'GET'
        });
        // $('#js-name-form').hide();
    });

    //3)new quote input


});
