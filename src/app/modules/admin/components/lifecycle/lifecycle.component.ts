import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnDestroy, OnChanges {

  constructor() { 
    console.log("child contructor view");
  }

  // @Input() message:any;
  // @Output() messageEven = new EventEmitter<string>();

  // childmessage: any = "child to parent";

  // sendMessage(){
  //   this.messageEven.emit(this.childmessage)
  // }

  counter = 0;
  interval: any;
  
  variableName="";
  @Input()
  

  ngOnInit(): void {
    console.log("child OnInit view");

    this.interval = setInterval(()=>{
      this.counter = this.counter + 1;
      console.log(this.counter);
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    console.log("child OnDestroy view");
  }

  ngOnChanges(): void {
    console.log("Child OnChanges view");
   }

}
