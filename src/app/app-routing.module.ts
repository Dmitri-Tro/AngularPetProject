import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import { LoginComponent } from "./auth/components/login/login.component";
import { PostsComponent } from "./main-page/components/posts/posts.component";
import { AuthGuard } from "./auth.guard";
import { PostComponent } from "./main-page/components/posts/components/post/post.component";
import { HeaderComponent } from "./header/header.component";
import {NewPostComponent} from "./new-post/new-post.component";
import {SubscriptionsComponent} from "./subscriptions/subscriptions.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'posts',
        children: [
          {
            path: ':postId',
            component: PostComponent,
          },
          {
            path: '',
            component: PostsComponent,
          },
        ],
      },
      {
        path: 'new-posts',
        component: NewPostComponent,
      },
      {
        path: 'subscriptions',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: SubscriptionsComponent,
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
