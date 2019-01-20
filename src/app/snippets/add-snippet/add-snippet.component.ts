import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

import { SnippetService } from '../snippet.service';

import { AuthService } from '../../core/auth.service';
import { UidService } from '../uid-service';
@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {
  // ACE Editor
  text: string = '';
  options: any = { maxLines: 1000, printMargin: false };

  onChange(code) {
    console.log('new code', code);
  }
  // End ACE Editor

  addSnippetForm: FormGroup;
  myDoc;
  snippetCreatedDate = new Date();

  state: string;

  loading = false;
  success = false;

  _date: any;

  constructor(
    private snippetService: SnippetService,
    private auth: AuthService,
    private uidService: UidService,
    private formBuilder: FormBuilder,
    private angularFirestore: AngularFirestore
  ) {
    const userId = this.uidService.getUid();
  }

  ngOnInit() {
    this.addSnippetForm = this.formBuilder.group({
      snippetTitle: ['', Validators.required],
      beginnerSnippet: '',
      stackblitzBeginnerUrl: '',
      expertSnippet: '',
      stackblitzExpertUrl: '',
      commonSnippet: '',
      stackblitzCommonPracticeUrl: '',
      versions: this.formBuilder.array([], Validators.minLength(1)),
      useCases: this.formBuilder.array([]),
      commonErrors: this.formBuilder.array([]),
      stackoverflowPosts: this.formBuilder.array([]),
      interviewQuestions: this.formBuilder.array([]),
      videoTutorials: this.formBuilder.array([]),
      writtenTutorials: this.formBuilder.array([]),
      snippetCreatedDate: new Date()
    });
    this.myDoc = this.angularFirestore.collection('snippets/').valueChanges();
  }

  /////////////
  get useCaseForms() {
    return this.addSnippetForm.get('useCases') as FormArray;
  }

  addUseCase() {
    const useCase = this.formBuilder.group({
      UseCaseUrl: []
    });

    this.useCaseForms.push(useCase);
  }

  deleteUseCase(i) {
    this.useCaseForms.removeAt(i);
  }

  //////////
  get commonErrorForms() {
    return this.addSnippetForm.get('commonErrors') as FormArray;
  }

  addCommonError() {
    const commonError = this.formBuilder.group({
      CommonErrorUrl: []
    });

    this.commonErrorForms.push(commonError);
  }

  deleteCommonError(i) {
    this.commonErrorForms.removeAt(i);
  }

  get stackoverflowPostForms() {
    return this.addSnippetForm.get('stackoverflowPosts') as FormArray;
  }

  addStackoverflowPost() {
    const stackoverflowPost = this.formBuilder.group({
      StackoverflowPostUrl: []
    });

    this.stackoverflowPostForms.push(stackoverflowPost);
  }

  deleteStackoverflowPost(i) {
    this.stackoverflowPostForms.removeAt(i);
  }

  get interviewQuestionForms() {
    return this.addSnippetForm.get('interviewQuestions') as FormArray;
  }

  addInterviewQuestion() {
    const interviewQuestion = this.formBuilder.group({
      InterviewQuestionUrl: []
    });

    this.interviewQuestionForms.push(interviewQuestion);
  }

  deleteInterviewQuestion(i) {
    this.interviewQuestionForms.removeAt(i);
  }

  get videoTutorialForms() {
    return this.addSnippetForm.get('videoTutorials') as FormArray;
  }

  addVideoTutorial() {
    const videoTutorial = this.formBuilder.group({
      VideoTutorialUrl: []
    });

    this.videoTutorialForms.push(videoTutorial);
  }

  deleteVideoTutorial(i) {
    this.videoTutorialForms.removeAt(i);
  }

  get writtenTutorialForms() {
    return this.addSnippetForm.get('writtenTutorials') as FormArray;
  }

  addWrittenTutorial() {
    const writtenTutorial = this.formBuilder.group({
      WrittenTutorialUrl: []
    });

    this.writtenTutorialForms.push(writtenTutorial);
  }

  deleteWrittenTutorial(i) {
    this.writtenTutorialForms.removeAt(i);
  }

  get versionForms() {
    return this.addSnippetForm.get('versions') as FormArray;
  }

  addVersion() {
    const version = this.formBuilder.group({
      technology: [],
      version: []
    });

    this.versionForms.push(version);
  }

  deleteVersion(i) {
    this.versionForms.removeAt(i);
  }

  async submitAddSnippetCollectionForm() {
    this.loading = true;

    const formValue = this.addSnippetForm.value;

    try {
      await this.angularFirestore.collection('snippets/').add(formValue);
      this.success = true;
    } catch (error) {
      console.error(error);
    }

    this.loading = false;
  }

  preloadData() {
    this.angularFirestore
      .doc('snippets/')
      .valueChanges()
      .pipe(
        tap(data => {
          this.addSnippetForm.patchValue(data);
        })
      )
      .subscribe();
  }
  changeHandler(error) {
    console.log(error);
    this.state = error;
  }
}
