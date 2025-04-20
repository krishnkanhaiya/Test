import { Component } from '@angular/core';

@Component({
  selector: 'app-matchscreen',
  templateUrl: './matchscreen.component.html',
  styleUrls: ['./matchscreen.component.css']
})
export class MatchscreenComponent {
  score: string = '65/1 (9.2)';
  batsman1: string = 'K Williamson';
  batsman2: string = 'Ravindra';
  Bowler: string = 'Varun C';
  onstrikeb1: boolean = true;
  message: string = 'New Zealand is dominating! 🔥🏏';
}