

$(document).ready(function(){
const $audio = $('audio');



// store 9 larry david quotes in an array. on clicking an image, trigger the associated quote to play

audioArray = [$audio[0], $audio[1], $audio[2], $audio[3], $audio[4], $audio[5], $audio[6], $audio[7], $audio[8]];

$('.larry-1').on('click', function() {
    audioArray[0].play();
    sequenceClick.push(audioArray[0]);
})
$('.larry-2').on('click', function(){
    audioArray[1].play();
    sequenceClick.push(audioArray[1]);
})
$('.larry-3').on('click', function(){
    audioArray[2].play();
    sequenceClick.push(audioArray[2]);
})
$('.larry-4').on('click', function(){
    audioArray[3].play();
    sequenceClick.push(audioArray[3]);
})
$('.larry-5').on('click', function(){
    audioArray[4].play();
    sequenceClick.push(audioArray[4]);
})
$('.larry-6').on('click', function(){
    audioArray[5].play();
    sequenceClick.push(audioArray[5]);
})
$('.larry-7').on('click', function(){
    audioArray[6].play();
    sequenceClick.push(audioArray[6]);
})
$('.larry-8').on('click', function(){
    audioArray[7].play();
    sequenceClick.push(audioArray[7]);
})
$('.larry-9').on('click', function(){
    audioArray[8].play();
    sequenceClick.push(audioArray[8]);
})




/// generate a random number between 0 and 9. using that number, pick a random audio quote to trigger.

// prevent default behavior of an 'a tag' first
$(".other-headers").on("click", function(event){
    event.preventDefault()
});

$(".random").on('click', function() {
    let randomizer = Math.floor(Math.random() * 10);
    if (randomizer === 0) {
        $audio[0].play();
    } else if (randomizer === 1) {
        $audio[1].play();
    } else if (randomizer === 2) {
        $audio[2].play();
    } else if (randomizer === 3) {
        $audio[3].play();
    } else if (randomizer === 4) {
        $audio[4].play();
    } else if (randomizer === 5) {
        $audio[5].play();
    } else if (randomizer === 6) {
        $audio[6].play();
    } else if (randomizer === 7) {
        $audio[7].play();
    } else if (randomizer === 8) {
        $audio[8].play();
    } 
});


// store the last 5 played audio clips in an array. when 'replay' h2 is clicked, play back the last 5 audio clips in order, one after the other

const sequenceClick = [];

$(".replay").on('click', function(){
    sequenceClick[0].play();
    sequenceClick[0].onended = function () {
        sequenceClick[1].play();
    }
    sequenceClick[1].onended = function() {
        sequenceClick[2].play();
    }
    sequenceClick[2].onended = function() {
        sequenceClick[3].play();
    }
    sequenceClick[3].onended = function() {
        sequenceClick[4].play();
    }
})



});










