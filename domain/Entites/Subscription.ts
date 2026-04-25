export class Subscription {
  id: number;
  userId: number;
  startDate: Date;
  endDate: Date;
  isActive: boolean;

  constructor(
    id: number,
    userId: number,
    startDate: Date,
    endDate: Date,
    isActive: boolean,
  ) {
    this.id = id;
    this.userId = userId;
    this.startDate = startDate;
    this.endDate = endDate;
    this.isActive = isActive;
  }
}

export interface SubscriptionRepository {
  getSubscriptionByUserId(userId: number): Promise<Subscription | null>;
  createSubscription(subscription: Subscription): Promise<void>;
  cancelSubscription(subscriptionId: number): Promise<void>;
}
