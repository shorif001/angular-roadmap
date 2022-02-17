import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges {

  constructor() {
    console.log("parent contructor view");
  }

  message = "hello world"

  ngOnInit(): void {
    console.log("parent OnInit view");
  }

  // receiveMessage($event:any){
  //   this.message = $event
  // }


  isChild = true;
  
  channelName = "";
  @Input()
  toggleChild(){
    this.isChild = !this.isChild;
  }

 ngOnChanges(): void {
  console.log("parent OnChanges view");
 }


}
