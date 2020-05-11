import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  serviceName:string;
  responseBody:any;
  constructor(private httpRef:HttpClient) { }

  ngOnInit(): void {
  }
  searchNames(serviceName){ 
    if(serviceName.viewModel==""){

    }
    else{
    this.httpRef.get("http://localhost:5003//service/serviceByName/"+serviceName.viewModel).subscribe((responseBody)=>{
      this.responseBody=responseBody;
      console.log(responseBody);
      
    });
    }
  }
}
