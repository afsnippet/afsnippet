import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProfileComponent, MembersComponent]
})
export class AccountModule {}
