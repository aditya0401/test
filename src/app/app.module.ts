import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {VgCoreModule} from 'videogular2/core';
import {VgControlsModule} from 'videogular2/controls';
import {VgOverlayPlayModule} from 'videogular2/overlay-play';
import {VgBufferingModule} from 'videogular2/buffering';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MyErrorDirective } from './app.myerrordirective';
import { PowerPipe } from './power.pipe';
//import {SingleMediaPlayer} from './single-media-player';

@NgModule({
  declarations: [
    AppComponent, MyErrorDirective, PowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
