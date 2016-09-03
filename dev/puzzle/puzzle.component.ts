import {
  Component,
  Input,
  trigger,
  state,
  style,
  transition,
  animate,
  OnInit
} from '@angular/core';

@Component({
    selector: 'puzzle',
    templateUrl: 'dev/puzzle/puzzle.component.html',
    styleUrls: ['./assets/app.css'],
    animations: [
        trigger('puzzleState', [
        state('inactive', style({
            //backgroundColor: '#eee',
            transform: 'scale(1)'
        })),
        state('active',   style({
            backgroundColor: '#eee',
            transform: 'scale(1.1)'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class PuzzleComponent implements OnInit {
   puzzle: Puzzle;

   switch1Value: number;
   switch2Value: number;
   switch3Value: number;
   switch4Value: number;
   
   constructor(){
       this.puzzle = new Puzzle();
   }

   ngOnInit(): void {
       this.switch1Value = Math.round(Math.random());
       this.switch2Value = Math.round(Math.random());
       this.switch3Value = Math.round(Math.random());
       this.switch4Value = Math.round(Math.random());

       console.log(this.switch1Value, this.switch2Value, this.switch3Value, this.switch4Value);
   }

   
    
}

export class Puzzle {

    state: string;
    placeholder: string;

    constructor(){
        this.state = 'inactive';
        this.placeholder = 'Enter Your Name Please!';
    }

    toggleState(){
        this.state === 'inactive' ? this.state = 'active' : this.state = 'inactive';
        this.placeholder === 'Enter Your Name Please!' ? this.placeholder = 'Just Your First Name' : this.placeholder = 'Enter Your Name Please!'; 
    }

}

