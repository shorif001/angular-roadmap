import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  userData:any = [];
  userProperty:any = {
    name: '',
    phone: '',
    email: '',
  }

  addUser(u:any){
    this.userData.push(this.userProperty);
    this.userProperty = {
      name: '',
      phone: '',
      email: '',
    };
    console.log(u);
  }

}
