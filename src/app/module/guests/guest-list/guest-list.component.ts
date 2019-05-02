import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent implements OnInit {

  constructor() {
    console.log("guests page");
   }

  ngOnInit() {
    console.log("guests page");    
  }

}
