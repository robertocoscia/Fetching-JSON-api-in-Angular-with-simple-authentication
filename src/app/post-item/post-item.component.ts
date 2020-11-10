import { HttpService } from '../services/http.service';
import { Post } from '../models/Post.model';
import { CommentService } from '../services/comment.service';
import { EventEmitter } from 'protractor';
import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {
  public propertyId:number;
  post: Post[];
  comments: Comment[];
  
  
  constructor(private route: ActivatedRoute, private httpService: HttpService, private commentService: CommentService) {
    
  }

  ngOnInit() { 
    this.propertyId= +this.route.snapshot.params['id'];

    this.httpService.getPosts().subscribe(data=>{
      this.post=data;
    }) 

    this.commentService.getComments().subscribe(comments=>{
      this.comments= comments;
    })
    }

    addComment(comment:Comment[]){
      this.commentService.addComment(comment).subscribe(comment=>{
        this.comments.push(comment);
      })
    }

  };

  
  


