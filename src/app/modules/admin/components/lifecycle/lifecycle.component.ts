import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { 
    console.log("child/lifecycle Constructor is called");

  }

  ngOnInit(): void {
    console.log("child/lifecycle OnInit is called");
  }

}
