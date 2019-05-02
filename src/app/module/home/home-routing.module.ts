import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  {
    path: '',
    component: VideoComponent,
  },
  {
    path: 'home',
    component: VideoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
