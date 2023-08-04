import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {MainPageRoutingModule} from "./main-page/main-page-routing.module";
import {LoginComponent} from "./auth/components/login/login.component";
import {PostsComponent} from "./main-page/components/posts/posts.component";
import {AuthGuard} from "./auth/services/auth/auth.guard";
import {PostComponent} from "./main-page/components/posts/components/post/post.component";

const routes: Routes = [
  { path: '',
    component: LoginComponent },
  {
    path: 'posts',
    component: PostsComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: ':postId', component: PostComponent },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    MainPageRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
