export class Order {
  constructor(
    public readonly id: string,
    private _amount: number,
    private _status: "pending" | "paid" | "failed" = "pending",
  ) {
    if (_amount <= 0) {
      throw new Error("Iznos narudžbe mora biti veći od nule.");
    }
  }

  // Getter omogućuje čitanje, ali ne i direktno mijenjanje
  get amount(): number {
    return this._amount;
  }

  get status(): string {
    return this._status;
  }

  // Poslovna logika unutar entiteta
  public markAsPaid(): void {
    if (this._status !== "pending") {
      throw new Error(
        `Ne mogu naplatiti narudžbu koja je u statusu: ${this._status}`,
      );
    }
    this._status = "paid";
  }

  public failPayment(): void {
    this._status = "failed";
  }

  // Primjer logike za popust
  public applyDiscount(percentage: number): void {
    if (percentage < 0 || percentage > 100) {
      throw new Error("Popust mora biti između 0 i 100%");
    }
    const discountAmount = (this._amount * percentage) / 100;
    this._amount -= discountAmount;
  }
}

export interface IOrderRepository {
  saveOrder(order: Order): Promise<void>;
  getOrderById(id: string): Promise<Order | null>;
}
