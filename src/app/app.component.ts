import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title:string;
  name:string;

  ngOnInit(){
  	this.name="Kiran";
  	this.title="Mr.";
  }

}
