import { Component, DoCheck, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements DoCheck {
  @Output() public emitGuess = new EventEmitter<any>();
  @Input() public isReadonly: boolean = false;
  @Input() public placeholder: string = '';
  
  public guess!: number;

  ngDoCheck(): void {
    this.sendGuess();
  }

  sendGuess() {
    this.emitGuess.emit(this.guess);
    console.log(this.guess);
  }
}
