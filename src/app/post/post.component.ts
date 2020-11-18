import { HttpService } from '../services/http.service';
import { Post } from '../models/Post.model';
import { CommentService } from '../services/comment.service';
import { Component, Input, OnInit } from '@angular/core';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() post: Post
  

  constructor(ngbConfig: NgbConfig) {
    ngbConfig.animation = true;
   }

  ngOnInit(): void {
    
  }

}
