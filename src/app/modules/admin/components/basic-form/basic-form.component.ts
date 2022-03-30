import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})
export class BasicFormComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {



  name:string; //jodi ei rokom kore variable lekha hoy tahole constructor er vitore variable er valu likhte hobe.

  fullName: string = "shorif,";
  lastName = "Shorif,"

  array = {
    name: "Array Name,",
    class: "Five"
  }

  object = [343, "shorif", "rohim", "korim"]

  currentDate: Date;

  minLength = 10;

  roleNo = 1;

  increment(){
    this.roleNo++;
  }
  decrement(){
    this.roleNo --;
  }



  constructor() { 
    this.name = "Shorif";
    this.currentDate = new Date();
  }

  ngOnInit(): void {
  }

  ngOnChanges(){
    console.log("Basic ngOnChanges");
  }
  ngDoCheck(){
    console.log("Basic ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("Basic ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("Basic ngAfterContentChecked");
  }
  ngAfterViewInit(){
    console.log("Basic ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("Basic ngAfterViewChecked");
  }
  ngOnDestroy(){
    console.log("Basic ngOnDestroy");
  }

}
