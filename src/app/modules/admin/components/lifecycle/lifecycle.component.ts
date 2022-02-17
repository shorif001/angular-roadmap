import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {

  constructor() { 

  }

  @Input() message:any;
  @Output() messageEven = new EventEmitter<string>();

  childmessage: any = "child to parent";

  sendMessage(){
    this.messageEven.emit(this.childmessage)
  }

  ngOnInit(): void {

  }

}
