import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { firebaseConfig } from '../../environments/firebaseConfig';

import { ScrollIntoViewDirective } from '../directives/scroll-into-view.directive';

import { CoreModule } from '../core/core.module';

import { SnippetService } from './snippet.service';

import { MaterialModule } from '../material.module';

import { FireFormDirective } from '../directives/fire-form.directive';

import { SnippetListComponent } from './snippet-list/snippet-list.component';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';

import { AceEditorModule } from 'ng2-ace-editor';
import { AceEditorComponent } from './ace-editor/ace-editor.component';
@NgModule({
  declarations: [
    SnippetListComponent,
    AddSnippetComponent,
    FireFormDirective,
    ScrollIntoViewDirective,
    AceEditorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AceEditorModule
  ],
  exports: [SnippetListComponent],
  providers: [SnippetService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnippetModule {}
