var $container = $('#container');

// generate 9 boxes
for (var i = 0; i < 9; i++) {
    $container.append('<div class="box"></div>');
}

var $boxes = $('.box');
var count = 0;

// X/O functionality
$boxes.click(function() {
    if (count % 2 === 0) {
        $(this).text('X');
        count++;      
    } else {
        $(this).text('O');  
        count++;          
    }
});