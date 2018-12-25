import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { SnippetService } from '../snippet.service';

import { Snippet } from '../snippet-data';
import { Language } from './add-snippet.data';

import { AuthService } from '../../core/auth.service';
import { UidService } from '../uid-service';
@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {
  @ViewChild('editor') editor;
  text: string = '';

  myForm: FormGroup;

  _date: any;
  item: Snippet | any = {};

  constructor(
    private snippetService: SnippetService,
    private auth: AuthService,
    private uidService: UidService,
    private formBuilder: FormBuilder
  ) {
    const userId = this.uidService.getUid();
  }

  onChange(code) {
    console.log('NEW CODE', code);
  }

  // onSubmit() {
  //   console.log('this.uidService.getUid() ', this.uidService.getUid());
  //   if (this.item.snippetText) {
  //     this.item.userId = this.uidService.getUid();
  //     this.item.snippetId = this.snippetService.createSnippetId();
  //     this.snippetService.addSnippet(this.item);
  //     this.item.snippetTitle = this.item.snippetTitle;
  //     this.item.snippetLanguage = this.item.snippetLanguage;
  //     this.item.snippetText = this.item.snippetText;
  //     this.item.snippetTags = this.item.snippetTags;
  //     this.item.snippetCreatedDate = this._date;
  //   }
  // }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      snippetTitle: '',
      stackblitzBeginnerUrl: '',
      stackblitzExpertUrl: '',
      stackblitzCommonPracticeUrl: '',
      resources: this.formBuilder.array([])
    });
  }

  languages: Language[] = [
    { value: 'js', viewValue: 'JavaScript' },
    { value: 'c++', viewValue: 'C++' },
    { value: 'ruby', viewValue: 'Ruby' }
  ];
}
