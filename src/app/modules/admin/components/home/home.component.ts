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
  // counter = 0;
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














 
// interpolation start 

appName = "This is app";
name="shorif"

getName(){
  return "This is function"
}

obj={
  name: "This is object name",
  age: 20
}

arr=['this is array name', 'this is array name1', 'this is array name2']

siteUrl = window.location.href;

// interpolation end 







// function on button click
getName1(paramiterPass:any){
  alert(paramiterPass)
}

// event

getVal(){
  console.log("shorif");
}

getData(val:string){
  console.log(val);
}








// input field value

title = 'shorif'

displayVal="";
getValue(val:string){
  console.log(val);
  this.displayVal=val
}
// click value
displayVal1="";
getValue1(val:string){
  console.log(val);
  this.displayVal1=val
}



// counter example


count=0;
counter(type:string){
  // this.count1++
  type==='plus'?this.count++:this.count--
}






// property binding
name1:string="shorif";
disable=true;

// if else 

show=false


//ngFor

// users=['shorif', 'rohim', 'korim'];


// users=[
//   {name: "shorif", email: "a@B.com", phone: "010101"},
//   {name: "rohim", email: "r@r.com", phone: "010102"}
// ];


//nested loop

nestedLoop = [
  {name: "a",phone:"1111", email:"a@a.com", accounts:['facebook', 'gmail', 'yahoomail']},
  {name: "b",phone:"2222", email:"b@b.com", accounts:['youtube', 'instagram', 'ymail']},
  {name: "c",phone:"3333", email:"c@c.com", accounts:['linkedin', 'gmail', 'aolmail']}
]






getname11:any= '';
getName11(data:any){
  console.log(data);
  this.getname11 = data;
}



userData = [{}];

inputFieldData(data:any){
  console.log(data);
  this.userData.push({
    uname:data.value,
    email:data.value,
    password:data.value
  })
}








title1 = "Multiple condition or else if";
// color="red";
color="green";


//switch case

color1 = 'green';








// todo list

list:any=[];

addTask(item:string){
  console.log(item);
  this.list.push({id:this.list.length,name:item})
  console.log(this.list);
}

removeTask(id:number){
  console.log(id);
  this.list=this.list.filter((item: { id: number; })=>item.id!==id);
}











}
