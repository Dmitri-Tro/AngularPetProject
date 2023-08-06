import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsComponent } from './subscriptions.component';
import {RouterOutlet} from "@angular/router";


@NgModule({
  declarations: [
    SubscriptionsComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
  ],
})
export class SubscriptionsModule { }
