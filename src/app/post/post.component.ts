import { HttpService } from '../services/http.service';
import { Post } from '../models/Post.model';
import { CommentService } from '../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  

  constructor(private httpService:HttpService, commentService: CommentService) { }

  ngOnInit(): void {
    
  }

}
