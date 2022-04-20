import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
  styles: [],
})
export class BoosterComponent implements OnInit {
  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }

  @Input() btnClass: string = 'btn-success';
  @Input('value') prog: number = 50;

  @Output('value') valueOut: EventEmitter<number> = new EventEmitter();

  get getPercentage() {
    return `${this.prog}%`;
  }

  changueValue(value: number) {
    //tsconfig.json => noImplicitReturns: false
    if (this.prog <= 0 && this.prog < 0) {
      this.valueOut.emit(100);
      return (this.prog = 0);
    }
    if (this.prog >= 100 && this.prog >= 0) {
      this.valueOut.emit(0);
      return (this.prog = 100);
    }

    this.prog += value;
    this.valueOut.emit(this.prog);
  }

  onChange(value: number) {
    if (value >= 100) {
      this.prog = 100;
    } else if (value <= 0) {
      this.prog = 0;
    } else {
      this.prog = value;
    }
    this.valueOut.emit(this.prog);
  }
}
