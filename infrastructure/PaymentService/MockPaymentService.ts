import type {
  IPaymentService,
  PaymentResult,
} from "../../domain/PaymentService/PaymentService.js";

export class MockPaymentService implements IPaymentService {
  async processPayment(amount: number): Promise<PaymentResult> {
    // Mock implementation - replace with actual payment processing logic
    console.log(`Processing payment of amount: ${amount}`);

    return {
      success: true,
      message: "Payment processed successfully",
    };
  }
}
