import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'add-comments',
  templateUrl: './add-comments.component.html',
  styleUrls: ['./add-comments.component.css']
})
export class AddCommentsComponent implements OnInit {
  @Output() addComment: EventEmitter<any>= new EventEmitter(); 
  comment: Comment;
  body: string;

  constructor() { }

  ngOnInit(): void {
  }

  onCommentSubmit(){
    const comment= {
      body: this.body,
      completed: false
    }
    this.addComment.emit(comment)
    console.log(comment)
  }

}
