import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SnippetModule } from '../snippets/snippet.module';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [CommonModule, FormsModule, SnippetModule, SidebarModule],
  exports: [],
  declarations: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule {}
