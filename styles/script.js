

$(document).ready(function(){
    // store 9 larry david quotes in an array. on clicking an image, trigger the associated quote to play
    
    const $audio = $('audio');
    
    audioArray = [
        $audio[0], 
        $audio[1], 
        $audio[2], 
        $audio[3], 
        $audio[4], 
        $audio[5], 
        $audio[6], 
        $audio[7], 
        $audio[8]
    ];

    for (let i = 1; i <= audioArray.length; i++) {
        $(`.larry-${i}`).on('click', function(){
            audioArray[i - 1].play();
            sequence.push(audioArray[i - 1]);
            const htmlToAppend = `<img src="assets/larry-crop-${i}.png" </img>`;
            $('.insert-here').append(htmlToAppend);
            // if (sequence.length >= 6) {
            //    $('.insert-here').empty();
            // }
        });
    }



// prevent default behavior of an 'a tag' first
    $(".other-headers").on("click", function(event){
        event.preventDefault()
    });
    
    let random;
    $('.random').on('click', function(){
        random = Math.floor(Math.random() * 10);
        $audio[random].play();
    });

// store the last 5 played audio clips in an array. when 'replay' h2 is clicked, play back the last 5 audio clips in order, one after the other



    const sequence = [];

    // trying to figure out max seq length
    if (sequence.length > 5) {
        numbers.length = 5;
      }
     

    $('.replay').on('click', function() {
        for (let i = 0; i < sequence.length; i++) {
            sequence[0].play();
            if (i === i) {
                sequence[i].onended = function() {
                    sequence[i + 1].play();
                };
            }
        }
    });

});


// TO DO
// max seq length
// fix tab through / click through accessibility 
// if sequence array = 0, replay function alert 'haven't played anything yet!'










