import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-form-label',
  templateUrl: './control-form-label.component.html',
})
export class ControlFormLabelComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() value: string = '';
}
