import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FamilyDetailsComponent } from './family-details/family-details.component';

@NgModule({
  declarations: [FamilyDetailsComponent],
  imports: [
    CommonModule,
    FamilyRoutingModule
  ]
})
export class FamilyModule { }
