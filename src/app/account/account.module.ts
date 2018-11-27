import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersComponent } from './members/members.component';
import { AccountComponent } from './account.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AccountComponent,
    MembersComponent
  ]
})
export class AccountModule { }
