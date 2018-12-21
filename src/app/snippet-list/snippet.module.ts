import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AceEditorModule } from 'ng2-ace-editor';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { Select2Module } from 'ng2-select2';
import { ClipboardModule } from 'ngx-clipboard';
import { TagInputModule } from 'ngx-chips';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CoreModule } from '../core/core.module';

import { SnippetService } from './snippet.service';

import { SnippetListComponent } from './snippet-list.component';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    AceEditorModule,
    HighlightJsModule,
    Select2Module,
    ClipboardModule,
    TagInputModule,
    AngularFirestoreModule.enablePersistence()
  ],
  exports: [SnippetListComponent],
  declarations: [SnippetListComponent, AddSnippetComponent],
  providers: [HighlightJsService, SnippetService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnippetModule {}
