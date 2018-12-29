import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { Select2Module } from 'ng2-select2';
import { ClipboardModule } from 'ngx-clipboard';
import { TagInputModule } from 'ngx-chips';
import { CoreModule } from '../core/core.module';
import { AceEditorModule } from 'ng2-ace-editor';

import { SnippetService } from './snippet.service';

import { SnippetListComponent } from './snippet-list.component';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';
import { MaterialModule } from '../material.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    CoreModule,
    HighlightJsModule,
    Select2Module,
    ClipboardModule,
    TagInputModule,
    AngularFireModule,
    AngularFirestoreModule.enablePersistence(),
    AceEditorModule
  ],
  exports: [SnippetListComponent],
  declarations: [SnippetListComponent, AddSnippetComponent],
  providers: [HighlightJsService, SnippetService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnippetModule {}
