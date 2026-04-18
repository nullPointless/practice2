export type PaymentResult = {
  success: boolean;
  message: string;
};

export interface IPaymentService {
  processPayment(amount: number): Promise<PaymentResult>;
}
