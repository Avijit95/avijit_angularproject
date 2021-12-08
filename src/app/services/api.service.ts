import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor() { }
    getUserlist() {
      return [
        {name:"avijit sau", id: 1, },
        {name:"Niladir Roy", id: 2, },
      ]
     
    }
}
