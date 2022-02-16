import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {
    console.log("Parent Constructor is called");
   }

  ngOnInit(): void {
    console.log("Parent OnInit is called");
  }

}
