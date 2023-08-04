import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule} from "./auth/auth.module";
import { MainPageModule } from './main-page/main-page.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { NewPostModule } from './new-post/new-post.module';
import {NgOptimizedImage} from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {AuthGuard} from "./auth/services/auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MainPageModule,
    SubscriptionsModule,
    NewPostModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    AuthGuard
  ],

  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

