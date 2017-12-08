var $container = $('#container');

// generate 9 boxes
for (var i = 0; i < 9; i++) {
    $container.append('<div class="box"></div>');
}

var $boxes = $('.box');