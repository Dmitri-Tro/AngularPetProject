import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { LogoutComponent } from './components/logout/logout.component';
import {PostsComponent} from "./components/posts/posts.component";
import {HeaderComponent} from "../header/header.component";
import {PostComponent} from "./components/posts/components/post/post.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import {Router, RouterModule} from "@angular/router";
import {AuthGuard} from "../auth.guard";


@NgModule({
  declarations: [
    PostsComponent,
    LogoutComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    NgOptimizedImage,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    Router,
    AuthGuard,
  ],

})
export class MainPageModule { }
