import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ],
  declarations: [
    SidebarComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SidebarModule { }
