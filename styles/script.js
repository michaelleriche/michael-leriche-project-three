

$(document).ready(function(){


    //accessibility features. tab through enables focus state, click through deactivates focus 

    document.addEventListener('keydown', function(tab) {
        if (tab.keyCode === 9) {
          $('body').addClass('focus-outline');
        }
      });
      
      document.addEventListener('click', function() {
        $('body').removeClass('focus-outline');
      });

      
    //   document.addEventListener('keydown', function(enter){
    //     if (enter.keyCode === 13) {
    //     }
    // }) 
      
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
            if (sequence.length % 6 === 0) {
               $('.insert-here').empty();
            }
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

    let sequence = [];
////////works except for erase array!!!!

    // $('.replay').on('click', function(){
    //     for (let i = 0; i < sequence.length; i++) {
    //         sequence[0].play();
    //         if (i === i) {
    //             sequence[i].onended = function() {
    //                 if(sequence[i + 1] === undefined || sequence[i + 1] === null) {
    //                     return false;
    //                 } else {
    //                     return sequence[i + 1].play();
    //                 }
    //             }
    //         } else if (sequence.length % 6 === 0) {
    //             $(sequence).empty();
    //         }
    //     }
    // });



// ON LUNCH CHECK IF THIS ERASES THE ARRAY

    $('.replay').on('click', function(){
        for (let i = 0; i < sequence.length; i++) {
            sequence[0].play();
            if (sequence.length % 6 === 0) {
                $(sequence).empty();
            } else if (i === i) {
                sequence[i].onended = function() {
                    if(sequence[i + 1] === undefined || sequence[i + 1] === null) {
                        return false;
                    } else {
                        return sequence[i + 1].play();
                    }
                }
            } 
        }
    });




    $('.clear').on('click', function(){
        sequence.length = [];
        $('.insert-here').empty()
    })
});






// TO DO
// max seq length
// if sequence array = 0, replay function alert 'haven't played anything yet!'
// accessibility - tab through hit enter on replay and randomize










