import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getData(): Observable<Iuser[]>{
    let url = "https://jsonplaceholder.typicode.com/users";
    return this.http.get<Iuser[]>(url);
  }
}

export interface Iuser{
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  website: string
}
