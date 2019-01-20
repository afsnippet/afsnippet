import { Component, OnInit } from '@angular/core';
import { SnippetService } from '../snippet.service';
import { Snippet } from '../snippet.data';

@Component({
  selector: 'app-snippet-list',
  templateUrl: './snippet-list.component.html',
  styleUrls: ['./snippet-list.component.css']
})
export class SnippetListComponent implements OnInit {
  items: Snippet[];
  editState: boolean;
  itemToEdit: Snippet;

  constructor(private snippetService: SnippetService) {}

  ngOnInit() {
    this.snippetService.getSnippets().subscribe(items => {
      this.items = items;
    });
  }

  deleteSnippet(event, item: Snippet) {
    console.log('Snippet DELETED');
    this.clearState();
    this.snippetService.deleteSnippet(item);
  }

  editSnippet(event, item: Snippet) {
    console.log('Snippet EDITED');
    this.editState = true;
    this.itemToEdit = item;
  }

  updateSnippet(item: Snippet) {
    console.log('Snippet UPDATED');
    this.snippetService.updateSnippet(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
}
