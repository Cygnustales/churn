import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  DBlist:any;
  dbname:string;
  chekcs:any;
  radio: any;
  message: string;

  @Output() messageEvent = new EventEmitter<string>();

  

  constructor(private service:ProjectService) { 
    var radio = [
      {
        name:'Customer Profile',
        id : 1
      },
      {
        name:'Daily Transactions',
        id : 2
      },
      {
        name:'Marketing (Historical)',
        id : 3
      },
      {
        name:'Marketing (planed)',
        id : 4
      },
    ]
    this.radio = radio;
  }

  ngOnInit() {
    
    this.DBlist = []
    this.getList()
  }

  sendMessage(message) {
    this.messageEvent.emit(message)
  }

  getList(){
    this.service.GetDatabaseList().subscribe(res => {
      this.DBlist = res.list;
    })
  }

  select(i){
    this.chekcs = i
  }


  openModal(data){
    swal({
      title: 'Import Data '+this.chekcs,
      text: 'From '+data.name,
      imageUrl: data.logo,
      imageHeight: 200,
      imageAlt: 'Custom image',
      animation: false
    }).then((result) => {
      this.sendMessage('dashboard');
    })
  }
}
