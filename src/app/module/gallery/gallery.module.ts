import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImagesComponent } from './images/images.component';

@NgModule({
  declarations: [ImagesComponent],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
