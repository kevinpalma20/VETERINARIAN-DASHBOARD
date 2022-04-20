import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {
  progress1: number = 25;
  progress2: number = 52;

  get getP1() {
    return `${this.progress1}%`;
  }

  get getP2() {
    return `${this.progress2}%`;
  }
}
