import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  database: boolean = true;
  dashboard: boolean = false;
  message:string;

  constructor() { }

  ngOnInit() {
    if(this.message){
      this.receiveMessage(event)
    }
  }

  

  receiveMessage($event) {
    this.message = $event
    if($event == 'dashboard'){
      this.DashboardButton()
    }else if($event == 'database'){
      this.DatabaseButton();
    }
  }

  DatabaseButton(){
    this.database = true;
    this.dashboard = false;
  }

  DashboardButton(){
    this.database = false;
    this.dashboard = true;
  }
}
