import { Injectable } from '@angular/core';
import { User } from 'firebase/app';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from 'angularfire2/firestore';
import { Snippet } from './snippet-data';
import { UidService } from './uid-service';
import { AuthService } from '../core/auth.service';
import { UUID } from 'angular2-uuid';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class SnippetService {
  user: User;

  usersCollection: AngularFirestoreCollection<Snippet>;
  snippets: Observable<Snippet[]>;
  snippetDoc: AngularFirestoreDocument<Snippet>;

  constructor(
    public firestore: AngularFirestore,
    private uidService: UidService,
    private auth: AuthService
  ) {
    this.auth.user.subscribe(data => {
      this.uidService.setUid(data);
    });

    const uid = this.uidService.getUid();
    this.usersCollection = this.firestore.collection('snippets/');

    this.snippets = this.usersCollection.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Snippet;
          data.uid = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getSnippets() {
    return this.snippets;
  }

  addSnippet(snippet: Snippet) {
    this.usersCollection.add(snippet);
  }

  deleteSnippet(snippet: Snippet) {
    this.snippetDoc = this.firestore.doc('snippets/' + snippet.uid);
    this.snippetDoc
      .delete()
      .then(
        () => console.log('success snippet DELETED'),
        err => console.log('Error ', err)
      );
  }

  updateSnippet(snippet: Snippet) {
    const snippetToSave = Object.assign({}, snippet);
    delete snippetToSave.uid;
    this.snippetDoc = this.firestore.doc('snippets/' + snippet.uid);
    this.snippetDoc
      .update(snippetToSave)
      .then(
        () => console.log('success snippet UPDATED'),
        err => console.log('Error ', err)
      );
  }

  createSnippetId() {
    return UUID.UUID();
  }
}
