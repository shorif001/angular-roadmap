import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {
    console.log("parent contructor view");
  }

  message = "hello world"
  counter = 0;
  // interval: any;

  ngOnInit(): void {
    console.log("parent OnInit view");

    // this.interval = setInterval(()=>{
    //   this.counter = this.counter + 1;
    //   console.log(this.counter);
    // }, 1000)
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


  ngOnDestroy(): void {
    // clearInterval(this.interval);
    console.log("parent OnDestroy view");
  }

 ngOnChanges(): void {
  console.log("parent OnChanges view");
 }


}
