import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

import { SnippetService } from '../snippet.service';

import { AuthService } from '../../core/auth.service';
import { UidService } from '../uid-service';

import { CodemirrorComponent } from '@ctrl/ngx-codemirror';
import { tsquery } from '@phenomnomnominal/tsquery';
import { Doc, TextMarker } from 'codemirror';
import 'codemirror/mode/javascript/javascript';
import * as ts from 'typescript';
import { nodeToMarker, positionToNode } from '../../utils/ast-utils';

const matchHighlightClass = 'ast-match-highlight';

@Component({
  selector: 'app-add-snippet',
  templateUrl: './add-snippet.component.html',
  styleUrls: ['./add-snippet.component.css']
})
export class AddSnippetComponent implements OnInit {
  addSnippetForm: FormGroup;
  myDoc;

  state: string;

  loading = false;
  success = false;

  _date: any;

  @ViewChild('codeEditor') codeEditor: CodemirrorComponent;

  private _sourceCode =
    'const magic = 5;\n\nfunction f(n:any){\n  return n+n;\n}\n\n\nfunction g() {\n  return f(magic);\n}\n\nconsole.log(g());';
  query = 'FunctionDeclaration';
  ast: ts.SourceFile | null = null;
  activeNode: ts.Node | null = null;
  selectorError: string | null = null;
  results: ts.Node[] = [];

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
      writtenTutorials: this.formBuilder.array([])
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

  readonly codemirrorOptions = {
    lineNumbers: true,
    theme: 'material',
    mode: { name: 'javascript', typescript: true }
  };

  private markers: TextMarker[] = [];

  ngAfterViewInit() {
    setTimeout(() => this.runQuery());
  }

  get sourceCode() {
    return this._sourceCode;
  }

  set sourceCode(value: string) {
    if (value !== this._sourceCode) {
      this._sourceCode = value;
      this.runQuery();
    }
  }

  updateQuery(query: string) {
    this.query = query;
    this.runQuery();
  }

  get doc() {
    return (this.codeEditor.codeMirror as any) as Doc;
  }

  runQuery() {
    this.ast = tsquery.ast(this.sourceCode, 'playground.ts');
    this.selectorError = null;
    try {
      this.results = tsquery(this.ast, this.query, { visitAllChildren: true });
    } catch (err) {
      this.selectorError = err.toString();
      return;
    }
    const { doc } = this;
    if (doc) {
      this.clearMarkers();
      const markerPositions = this.results.map(nodeToMarker);
      this.markers = markerPositions.map(({ start, end }) =>
        doc.markText(start, end, {
          className: matchHighlightClass,
          title: this.query
        })
      );
    }
  }

  cursorMoved() {
    if (this.ast) {
      const cursorPos = this.doc.getCursor();
      this.activeNode = positionToNode(this.ast, cursorPos);
    }
  }

  private clearMarkers() {
    for (const marker of this.markers) {
      marker.clear();
    }
    this.markers = [];
  }

  activateNode(node: ts.Node) {
    const { start, end } = nodeToMarker(node);
    this.doc.setSelection(end, start, { scroll: true });
    this.activeNode = node;
  }
}
