

$(document).ready(function(){

    document.addEventListener('keydown', function(tab) {
        if (tab.keyCode === 9) {
            $('body').addClass('focus-outline');
        }
    });
    document.addEventListener('click', function() {
        $('body').removeClass('focus-outline');
    });

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
        $audio[8],
        $audio[9],
        $audio[10],
        $audio[11],


    ];
    let sequence = [];

    for (let i = 1; i <= audioArray.length; i++) {
        $(`.keanu-${i}`).on('click', function(){
            audioArray[i - 1].play();
            sequence.push(audioArray[i - 1]);
            const htmlToAppend = `<img src="assets/keanu-crop-${i}.png" </img>`;
            $('.dynamic-images').append(htmlToAppend);
            if (sequence.length % 6 === 0) {
                $('.dynamic-images').empty();
                sequence = [];
            }
        });
    }
    
    $(".other-headers").on("click", function(event){
        event.preventDefault()
    });
    let random;
    $('.random').on('click', function(){
        random = Math.floor(Math.random() * 10);
        $audio[random].play();
    });

    $('.replay').on('click', function(){
        for (let i = 0; i < sequence.length; i++) {
            sequence[0].play();
            if (i === i) {
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
        $('.dynamic-images').empty()
    })
});










