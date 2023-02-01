# The Mentalist

The Mentalist is a guessing game that the web app will choose a random number between 1 and 1000 and you have to guess what number is. The app will tell you if your guess is greater or lesser than his number. You'll have 10 chances to hit the correct number. Every new game, a new number is generated.

You can try the game <a href="https://bryandev-aluramentalista.netlify.app/">here</a>

Have Fun!

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.1. It was produced for ALURA - IMERSÃO DEV JS 2023 with some upgrades that made the app idea better.

## Technologies

<li>Angular
<li>HTML
<li>SCSS
<li>JavaScript
<li>TypeScript

## Library

All used is by my own.

# The App
## Starting the App

![image](https://user-images.githubusercontent.com/85527991/216012556-2a71a28d-6e7f-42ae-a4d1-683e6a48eaf8.png)

When you start the game, you will able check the rules and input to play. You'll need to put some number to try guess.

## End of app 

![image](https://user-images.githubusercontent.com/85527991/216012728-b7fa324f-2199-4d6f-a2c5-e5376c994a6d.png)

Winning or loosing, this is the end of the app (unique difference between winning and loosing is the message in bottom of card). The app will block the Input and changing the button to play for Refresh button.


# Things that you should know

## <app-button>
The <app-button> have one dynamic property called "text". That's the only way you can change the name in the button.
The tag will be <app-button text="your text here"> </app-button> and the button will replace the standard name (standard name: "Palpitar").

## <app-input>
The <app-input> tag have three dynamic properties: Two of them are Inputs, and the other one is Output. You can set if your Input is readonly by setting isReadonly (false is default) to true on tag. You can change the placeholder setting placeholder="". And the component EMITS an event Emitter. That will need to add (emitGuess)="" to send a event with the value typed by user. Example:

<app-input 
  placeholder="new placeholder"
  isReadonly= true
  (emitGuess)="myMethod($event)"
 >
 </app-input>
 
 ## Question
 
 Any question you can add me on <a href="https://www.linkedin.com/in/bryanolima/">linkedIn</a> or <a href="https://twitter.com/siujoga">Twitter</a>. Feel free to ask anything!
