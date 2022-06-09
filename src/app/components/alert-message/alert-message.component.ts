import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
})
export class AlertMessageComponent implements OnInit {
  @Input() message: string = '';
  @Input() success: boolean = false;

  public color: 'alert-danger' | 'alert-success' = 'alert-success';

  ngOnInit(): void {
    if (!this.success) this.color = 'alert-danger';
  }
}
