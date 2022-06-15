# If, Ands, or Buts

> In this assignment, we'll be continuing to build programs with if statements. As usual, start off by forking then cloning this repository.

## `lock-box.js`

You've been contracted to write the software for a lock box. 

Write a program called `lock-box.js` that stores the pin code to the lock box in a variable at the top of your program (i.e.: `const pinCode = '1234';`). 

After that, use `prompt-sync` to prompt the user for the passcode. If the user gets the passcode exactly correct, log a success message containing the word, "success". If not, log a failure message containing the word, "failure".

**Note:** In this assignment, the `node_modules` folder containing the `prompt-sync` dependency does not already exist. To add it to this project, navigate to this repository using the command line then install it using the Node Package Manager with `npm install prompt-sync`.

## `rock-paper-scissors.js`

Let's play a classic game of rock, paper, scissors!

Write a program called 'rock-paper-scissors.js' that takes in two inputs in a row for Player 1 and Player 2.

The players can only input "rock", "paper", and "scissors".  Anything else should result in a failure message getting logged to the screen.
After both players input their options, use console.log() to print the player who emerged victorious.

For those who are unfamiliar, rock beats scissors, scissors beats paper, and paper beats rock.  If both players input the same answer, it should result in a draw.

An example game
```
Player 1, enter "rock", "paper", or "scissors":
> rock
Player 2, enter "rock", "paper", or "scissors":
> paper
Player 2 wins!
```

