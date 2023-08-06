export interface SubscriptionData {
  type: string,
  conditions: {
    subscriptionTime: {
      name: string,
      value: string
    },
    accessToPostCategories: {
      name: string,
      value: string
    },
    accessToChat: {
      name: string,
      value: string
    },
    emailNewsletters: {
      name: string,
      value: string
    },
  },
  cost: {
    name: string,
    value: string,
  },
}

export const subscriptionsData: SubscriptionData[] = [
  {
    type: 'simple',
    conditions: {
      subscriptionTime: {
        name: 'Subscription period',
        value: '30 days'
      },
      accessToPostCategories: {
        name: 'Access to post categories',
        value: 'All'
      },
      accessToChat: {
        name: 'Access to chat',
        value: 'No'
      },
      emailNewsletters: {
        name: 'Email Newsletters',
        value: 'No'
      },
    },
    cost: {
      name: 'Cost',
      value: '$5'
    },
  },
  {
    type: 'standard',
    conditions: {
      subscriptionTime: {
        name: 'Subscription period',
        value: '90 days'
      },
      accessToPostCategories: {
        name: 'Access to post categories',
        value: 'All'
      },
      accessToChat: {
        name: 'Access to chat',
        value: 'No'
      },
      emailNewsletters: {
        name: 'Email Newsletters',
        value: 'Yes'
      },
    },
    cost: {
      name: 'Cost',
      value: '$15'
    },
  },
  {
    type: 'advanced',
    conditions: {
      subscriptionTime: {
        name: 'Subscription period',
        value: '180 days'
      },
      accessToPostCategories: {
        name: 'Access to post categories',
        value: 'All'
      },
      accessToChat: {
        name: 'Access to chat',
        value: 'Yes'
      },
      emailNewsletters: {
        name: 'Email Newsletters',
        value: 'Yes'
      },
    },
    cost: {
      name: 'Cost',
      value: '$30'
    },
  },
];
