import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // arleady in app module

import { AceEditorModule } from 'ng2-ace-editor';
import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { Select2Module } from 'ng2-select2';
import { ClipboardModule } from 'ngx-clipboard';
import { TagInputModule } from 'ngx-chips';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { CoreModule } from '../core/core.module';

import { SnippetService } from './snippet.service';

import { SnippetListComponent } from './snippet-list.component';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    AceEditorModule,
    HighlightJsModule,
    Select2Module,
    ClipboardModule,
    TagInputModule,
    AngularFirestoreModule.enablePersistence(),
  ],
  exports: [
    SnippetListComponent
  ],
  declarations: [
    SnippetListComponent,
    AddSnippetComponent
  ],
  providers: [
    HighlightJsService,
    SnippetService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SnippetModule { }
