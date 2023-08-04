import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PostsComponent} from "./components/posts/posts.component";
import {PostComponent} from "./components/posts/components/post/post.component";
import {HeaderComponent} from "../header/header.component";

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'posts',
        children: [
          {
            path: '',
            component: PostsComponent,
          },
          {
            path: ':postId',
            component: PostComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
