import type { IOrderRepository, Order } from "../domain/Entites/Order.js";

export class SqlOrderRepository implements IOrderRepository {
  private orders: Map<string, Order> = new Map();

  async saveOrder(order: Order): Promise<void> {
    // Simulate saving to a SQL database
    this.orders.set(order.id, order);
    console.log(`Order with ID ${order.id} saved to SQL database.`);
  }

  async getOrderById(id: string): Promise<Order | null> {
    // Simulate retrieving from a SQL database
    const order = this.orders.get(id) || null;
    console.log(`Order with ID ${id} retrieved from SQL database.`);
    return order;
  }
}
