import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuestListComponent} from'./guest-list/guest-list.component'

const routes: Routes = [
  {
    path: '',
    component: GuestListComponent,
  },
  {
    path: 'guest-list',
    component: GuestListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuestsRoutingModule { }
