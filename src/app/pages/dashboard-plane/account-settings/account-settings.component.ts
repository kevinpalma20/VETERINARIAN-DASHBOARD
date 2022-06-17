import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public colors: string[] = [
    'default',
    'green',
    'red',
    'blue',
    'purple',
    'megna',
  ];
  public colorsDark: string[] = [
    'default-dark',
    'green-dark',
    'red-dark',
    'blue-dark',
    'purple-dark',
    'megna-dark',
  ];

  constructor(private settingsService: SettingsService) {}

  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
  }
}
