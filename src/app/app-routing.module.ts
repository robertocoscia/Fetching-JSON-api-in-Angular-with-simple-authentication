import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { AddCommentsComponent } from './add-comments/add-comments.component';
import { PostComponent } from './post/post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  // },
  {path:"post", component: PostsComponent},
  {path:"post/:id", component: PostItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PostsComponent, PostItemComponent, AddCommentsComponent]