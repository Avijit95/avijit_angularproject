import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {
  public userlist: any = [];
  constructor(public userservice:ApiService) { }

  ngOnInit(): void {
    this.userlist = this.userservice.getUserlist ();
    console.log('list', this.userlist);
    
  }

}
