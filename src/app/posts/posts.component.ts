import { HttpService } from '../services/http.service';
import { Post } from '../models/Post.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private httpService: HttpService) { }
  ngOnInit() {
    this.httpService.getPosts().subscribe(posts=>{
      this.posts=posts;  
    });
  }
  

}
