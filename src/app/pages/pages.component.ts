import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  constructor() {}

  ngOnInit(): void {
    const date = new Date();
    let theme = './assets/css/colors/default.css';
    if (date.getHours() >= 17) theme = './assets/css/colors/default-dark.css';

    const url = localStorage.getItem('theme');
    this.linkTheme?.setAttribute('href', url || theme);
  }
}
