function startPlaying() { 
    window.location.href = "page2.html"; 
}

// business logic

var dice = function () {
    return Math.floor(Math.random() * 6) + 1;
}
function PlayerOutcome(roll, currentScore, totalScore) {
    this.roll = roll
    this.currentScore = currentScore
    this.totalScore = totalScore
}
var player1 = new PlayerOutcome(0, 0);
var player2 = new PlayerOutcome(0, 0);

PlayerOutcome.prototype.diceOne = function () {
    if (this.roll === 1) {
        this.currentScore = 0;
        alert("Sorry its the next players turn");
    }
    else {
        this.currentScore += this.roll;
    
    }
};
PlayerOutcome.prototype.holding = function () {
    this.totalScore += this.currentScore;
    this.currentScore = 0;
    alert("Sorry its the next players turn");
};


PlayerOutcome.prototype.winner = function () {
    if (this.totalScore >= 100) {
        alert("You are a winner")
    }
};

$(document).ready(function () {
    $("#start").click(function () {
        event.preventDefault();
        $("#rules").hide();
        $(".container").show();
        var name1 = $("input#one").val();
        var name2 = $("input#two").val();
        $("h2#name1").text(name1 + ":");
        $("h2#name2").text(name2 + ":");

    });
    $("#roll1").click(function () {
        player1.roll = dice()
        $("h2#diceRoll1").text("Dice Roll:" + player1.roll);
        player1.diceOne();
        $("#current1").text("Current Score:" + player1.currentScore);

        $("#roll2").click(function () {
            player2.roll = dice()
            $("h2#diceRoll2").text("Dice Roll:" + player2.roll);
            player2.diceOne();
            $("#current2").text("Current Score:" + player2.currentScore);
        });

        $("#newgame").click(function () {
            $(".container").hide();
            $("input#name1").val("");
            $("input#name2").val("");
            player1.newGame();
            player2.newGame();
            $("#diceRoll1").none();
            $("#current1").none();
            $("#total1").none();
            $("#diceRoll2").none();
            $("#current2").none();
            $("#total2").none();
            $("#rules").show();
        });

        $("#hold1").click(function () {
            player1.holding();
            $("#total1").text("Total Score:" + player1.totalScore);
            $("#diceRoll1").none();
            $("#current1").none();
            player1.winner();
        });
    
        $("#hold2").click(function () {
            player2.holding();
            $("#total2").text("Total Score:" + player2.totalScore);
            $("#diceRoll2").empty();
            $("#current2").empty();
            player2.winner();
        });
        
    });
});

