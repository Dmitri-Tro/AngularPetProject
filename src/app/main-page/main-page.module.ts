import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { LogoutComponent } from './components/logout/logout.component';
import {PostsComponent} from "./components/posts/posts.component";
import {HeaderComponent} from "../header/header.component";
import {PostComponent} from "./components/posts/components/post/post.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PostsComponent,
    LogoutComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgOptimizedImage,
    MatButtonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainPageModule { }
