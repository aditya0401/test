import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './module/home/home.module#HomeModule'
  },
  {
    path: 'home',
    loadChildren: './module/home/home.module#HomeModule'
  },
  {
    path: 'guests',
    loadChildren: './module/guests/guests.module#GuestsModule'
  },
  {
    path: 'schedule',
    loadChildren: './module/schedule/schedule.module#ScheduleModule'
  },
  {
    path: 'family',
    loadChildren: './module/family/family.module#FamilyModule'
  },
  {
    path: 'gallery',
    loadChildren: './module/gallery/gallery.module#GalleryModule'
  },
  {
    path: 'login',
    loadChildren : './module/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
