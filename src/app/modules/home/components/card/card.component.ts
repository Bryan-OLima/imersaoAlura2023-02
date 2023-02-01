import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{
  @Input() public isHeader: boolean = true;

  public counter: number = 0;
  public userTry!: number;
  public maxTry: number = 11;
  public secretNumber: number = 0;
  public response: string = '';
  public isFinished: boolean = false;

  ngOnInit(): void {
    this.newRandom();
    this.makeGuess(this.secretNumber, this.userTry)
    console.log(this.secretNumber);
  }

  newRandom() {
    this.secretNumber = Math.floor(Math.random() * 1001);
  }

  getGuess(event: number) {
    this.userTry = event;
  }

  makeGuess(
    secretNumber: number, 
    userTry: number, 
    ) {
      if (this.maxTry == 1) {
        this.response = `Infelizmente, você perdeu. O numero era ${secretNumber}, clique no botão "Atualizar" para jogar novamente`;
        this.isFinished = true;
      } 
      else if(userTry > 1000 || userTry < 1){
        this.response = `Pô, meu... não leu as regras? O numero tem que ser entre 1 e 1000! Você não perdeu a sua tentativa!`;
      } 
      else if(secretNumber > userTry && this.maxTry > 0){
        this.maxTry--;
        this.counter++;
        this.response = `O numero secreto é maior que ${userTry}. Restam ${this.maxTry} Tentativas.`;
      } 
      else if(secretNumber < userTry && this.maxTry > 0){
        this.maxTry--;
        this.counter++;
        this.response = `O numero secreto é menor que ${this.userTry}. Restam ${this.maxTry} Tentativas.`;
      } 
      else if(secretNumber == userTry) {
        this.counter++;
        this.response = `Você acertou, cara! O Numero secreto é ${secretNumber}! Você acertou em ${this.counter} Tentativas. 
          Clique em Jogar Novamente para atualizar a pagina!`;
        this.isFinished = true;
      } 
  }

  refreshGame() {
    location.reload();
  }
}
