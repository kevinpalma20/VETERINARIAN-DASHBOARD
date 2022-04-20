import { NgModule } from '@angular/core';

import { NgChartsModule } from 'ng2-charts';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BoosterComponent } from './booster/booster.component';
import { DonutComponent } from './donut/donut.component';

@NgModule({
  declarations: [BoosterComponent, DonutComponent],
  exports: [BoosterComponent, DonutComponent],
  imports: [CommonModule, FormsModule, NgChartsModule],
})
export class ComponentsModule {}
