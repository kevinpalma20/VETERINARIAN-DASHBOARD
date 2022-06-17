import { Component, Input, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-picker-color-item',
  templateUrl: './picker-color-item.component.html',
})
export class PickerColorItemComponent {
  @Input() color: string = 'default';
  constructor(private settingsService: SettingsService) {}

  changeTheme(theme: string) {
    this.settingsService.changeTheme(theme);
  }
}
