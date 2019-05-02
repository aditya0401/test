import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { VideoComponent } from './video/video.component';

@NgModule({
  declarations: [VideoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class HomeModule { }
