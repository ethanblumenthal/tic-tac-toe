var $container = $('#container');

// generate 9 boxes
for (var i = 0; i < 9; i++) {
    $container.append('<div class="box"></div>');
}

var $boxes = $('.box');
var count = 0;

// XO functionality
$boxes.click(function() {
    if (count % 2 === 0) {
        $(this).text('X');                
    } else {
        $(this).text('O');          
    }
    count++;
    $(this).off();  
});

// reset button
$('button').click(function() {
    $boxes.text('');
});