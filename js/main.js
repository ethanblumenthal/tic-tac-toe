var $container = $('#container');
var $text = $('#text');

// generate 9 boxes
for (var i = 0; i < 9; i++) {
    $container.append('<div class="box"></div>');
}

var $boxes = $('.box');
var count = 0;

// click functionality
function playGame() {
    $boxes.click(function() {
        if (count % 2 === 0) {
            $(this).text('X');                
        } else {
            $(this).text('O');          
        }
        count++;
        $(this).off();
        checkWinner();
        checkTie();
    });
}
playGame()

// check for winner
function checkWinner() {
    var row1 = $boxes.eq(0).text() === $boxes.eq(1).text() && $boxes.eq(0).text() === $boxes.eq(2).text() && $boxes.eq(0).text() !== '';
    var row2 = $boxes.eq(3).text() === $boxes.eq(4).text() && $boxes.eq(3).text() === $boxes.eq(5).text() && $boxes.eq(3).text() !== '';
    var row3 = $boxes.eq(6).text() === $boxes.eq(7).text() && $boxes.eq(6).text() === $boxes.eq(8).text() && $boxes.eq(6).text() !== '';
    var col1 = $boxes.eq(0).text() === $boxes.eq(3).text() && $boxes.eq(0).text() === $boxes.eq(6).text() && $boxes.eq(0).text() !== '';
    var col2 = $boxes.eq(1).text() === $boxes.eq(4).text() && $boxes.eq(1).text() === $boxes.eq(7).text() && $boxes.eq(1).text() !== '';
    var col3 = $boxes.eq(2).text() === $boxes.eq(5).text() && $boxes.eq(2).text() === $boxes.eq(8).text() && $boxes.eq(2).text() !== '';
    var dia1 = $boxes.eq(0).text() === $boxes.eq(4).text() && $boxes.eq(0).text() === $boxes.eq(8).text() && $boxes.eq(0).text() !== '';
    var dia2 = $boxes.eq(2).text() === $boxes.eq(4).text() && $boxes.eq(2).text() === $boxes.eq(6).text() && $boxes.eq(2).text() !== '';

    if (row1 || row2 || row3 || col1 || col2 || col3 || dia1 || dia2) {
        $boxes.css({'background': 'pink'});
        $boxes.off();
        if (count % 2 !== 0) {
            $text.text('X wins!');                
        } else {
            $text.text('O wins!');          
        }
    }
}

// check for tie
function checkTie() {
    if (count === 9) {
        $text.text('Tie!');
    }
}

// reset button
$('button').click(function() {
    playGame();
    $boxes.text('');
    $boxes.css({'background': 'white'});
    $text.text('Player 1: X ----- Player 2: O');
    count = 0;
});