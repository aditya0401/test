import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import {UserComponent, DialogOverviewExampleDialog} from './user/user.component';
import { MaterialModule } from '../../material';
@NgModule({
  declarations: [UserComponent,DialogOverviewExampleDialog],
  imports: [
    CommonModule,MaterialModule,
    LoginRoutingModule,FormsModule,ReactiveFormsModule
  ],
  entryComponents: [UserComponent,DialogOverviewExampleDialog],
})
export class LoginModule { }
