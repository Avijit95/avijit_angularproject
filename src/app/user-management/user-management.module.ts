import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagementRoutingModule } from './user-management-routing.module';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { UserListingComponent } from './user-listing/user-listing.component';


@NgModule({
  declarations: [
    AddEditUserComponent,
    UserListingComponent
  ],
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ]
})
export class UserManagementModule { }
