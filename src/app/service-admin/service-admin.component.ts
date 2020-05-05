import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css']
})
export class ServiceAdminComponent implements OnInit {
  add: boolean=true;
  update: boolean=false;
  delete: boolean=false;
  show: boolean=false;
  responseBody:any;
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleAdd(){  
    this.add=true;
    this.update=false;
    this.delete=false;
    this.show=false;
  }
  toggleUpdate(){
    this.update=true;
    this.add=false;
    this.delete=false;
    this.show=false;
  }
  toggleDelete(){
    this.delete=true;
    this.add=false;
    this.update=false;
    this.show=false;    
  }
  toggleShow(){
    this.show=true;
    this.add=false;
    this.delete=false;
    this.update=false;
  }
 
}
