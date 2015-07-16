/**
 * Created by spook_000 on 7/8/2015.
 */


$(document).ready(function(){ // on document loadup
    var audioElement = document.createElement('audio'); // create variable audioElement inheriting audio

    audioElement.setAttribute('src', 'http://puu.sh/iIJqP/7ca580ba60.wav'); // setting source of audio

    $.get();
    audioElement.addEventListener('load', function(){ // on load of audioElement, add play function
        audioElement.play();
    }, true); // setting it to true makes it bubbled (read docs for document.ready();

    $('.jcena').click(function(){
        event.preventDefault();
        audioElement.play();
    })
});

// TESTING
$('section#changeme').append($test);
$test.append($cd);


$test.click(function(){
    runInc();
})


function runInc(){
    if (!isAnimating){
        isAnimating = true;
        changeInc();
        $($cd).width("100%").stop(true, true).animate({width: '0%'}, 1000, 'linear', function(){
            isAnimating = false;
            income += 1;
        });
    }
}

function changeInc(){
    $cd.text(income);
}