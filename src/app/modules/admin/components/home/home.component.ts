import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }

  message = "hello world"

  ngOnInit(): void {

  }

  receiveMessage($event:any){
    this.message = $event
  }

}
