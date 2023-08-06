import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SubscriptionData, subscriptionsData} from "../Data/subscriptions.data";

@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.css']
})
export class SubscriptionsComponent implements OnInit {
  subscription: SubscriptionData | undefined;

  constructor(
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const subscriptionTypeString = params.get('type');
      if (subscriptionTypeString !== null) {
        const subscriptionType = subscriptionTypeString;
        this.subscription = subscriptionsData.find(subscription => subscription.type === subscriptionType);
      }
    });
  };

  onSelectSubscription(selectedType: string) {
    this.subscription = subscriptionsData.find(subscription => subscription.type === selectedType);
  };

  protected readonly subscriptionsData = subscriptionsData;
  protected readonly Object = Object;
}
