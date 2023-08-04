import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubscriptionsRoutingModule } from './subscriptions-routing.module';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionsComponent } from './subscriptions.component';


@NgModule({
  declarations: [
    SubscriptionsComponent,
    SubscriptionComponent
  ],
  imports: [
    CommonModule,
    SubscriptionsRoutingModule
  ]
})
export class SubscriptionsModule { }
