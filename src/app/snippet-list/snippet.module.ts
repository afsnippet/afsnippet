import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { firebaseConfig } from '../../environments/firebaseConfig';

//import { HighlightJsModule, HighlightJsService } from 'angular2-highlight-js';
import { CoreModule } from '../core/core.module';
import { AceEditorModule } from 'ng2-ace-editor';

import { SnippetService } from './snippet.service';

import { MaterialModule } from '../material.module';

import { FireFormDirective } from '../directives/fire-form.directive';

import { SnippetListComponent } from './snippet-list.component';
import { AddSnippetComponent } from './add-snippet/add-snippet.component';
@NgModule({
  declarations: [SnippetListComponent, AddSnippetComponent, FireFormDirective],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    CoreModule,
    //HighlightJsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AceEditorModule
  ],
  exports: [SnippetListComponent],
  providers: [SnippetService],
  //providers: [HighlightJsService, SnippetService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnippetModule {}
