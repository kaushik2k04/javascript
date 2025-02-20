<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rock Paper Scissors</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
        }
        .choices {
            margin: 20px;
        }
        .result {
            margin-top: 20px;
            font-size: 24px;
        }
    </style>
</head>
<body>
    <h1>Rock Paper Scissors</h1>
    <div class="choices">
        <button onclick="play('rock')">Rock</button>
        <button onclick="play('paper')">Paper</button>
        <button onclick="play('scissors')">Scissors</button>
    </div>
    <div class="result" id="result"></div>

    <script>
        function play(choice) {
            const choices = ['rock', 'paper', 'scissors'];
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            let result = '';

            if (choice === computerChoice) {
                result = 'It\'s a tie!';
            } else if (
                (choice === 'rock' && computerChoice === 'scissors') ||
                (choice === 'paper' && computerChoice === 'rock') ||
                (choice === 'scissors' && computerChoice === 'paper')
            ) {
                result = 'You win!';
            } else {
                result = 'You lose!';
            }

            document.getElementById('result').innerText = `You chose ${choice}, computer chose ${computerChoice}. ${result}`;
        }
    </script>
</body>
</html>
