import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-modal',
  templateUrl: './header-modal.component.html',
})
export class HeaderModalComponent implements OnInit {
  @Input('header') header: string = '';
  constructor() {}

  ngOnInit(): void {}
}
