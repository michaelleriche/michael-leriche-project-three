

$(document).ready(function(){
	

//create variables that holds each audio file individually (using id)
   
    // const larry1 = $("#larry-1");
    // const larry2 = $("#larry-2");
    // const larry3 = $("#larry-3");
    // const larry4 = $("#larry-4");
    // const larry5 = $("#larry-5");
    // const larry6 = $("#larry-6");
    // const larry7 = $("#larry-7");
    // const larry8 = $("#larry-8");
    // const larry9 = $("#larry-9");
 

 // store all the variables in an array
// const audioArray = [larry1, larry2, larry3, larry4, larry5, larry6, larry7, larry8, larry9];

const $audio = $('audio');

audioArray = [$audio[0], $audio[1], $audio[2], $audio[3], $audio[4], $audio[5], $audio[6], $audio[7], $audio[8]];

console.log(audioArray);


$('.larry-1').on('click', function() {
    audioArray[0].play();
    if (audioArray[0].play() === true) {
        console.log('playing');
    }
})

$('.larry-2').on('click', function(){
    audioArray[1].play();
})
$('.larry-3').on('click', function(){
    audioArray[2].play();
})
$('.larry-4').on('click', function(){
    audioArray[3].play();
})
$('.larry-5').on('click', function(){
    audioArray[4].play();
})
$('.larry-6').on('click', function(){
    audioArray[5].play();
})
$('.larry-7').on('click', function(){
    audioArray[6].play();
})
$('.larry-8').on('click', function(){
    audioArray[7].play();
})
$('.larry-9').on('click', function(){
    audioArray[8].play();
})

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







});










