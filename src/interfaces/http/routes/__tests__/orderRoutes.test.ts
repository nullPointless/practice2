import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import express from "express";
import { createOrderRoutes } from "../orderRoutes";

describe("Order Routes", () => {
  let app: express.Application;

  beforeEach(() => {
    app = express();
    app.use("/api/orders", createOrderRoutes());
  });

  describe("POST /api/orders", () => {
    it("should create an order", async () => {
      const response = await request(app)
        .post("/api/orders")
        .send({ amount: 99.99 })
        .expect(200);

      expect(response.body).toEqual({ message: "Create order" });
    });
  });

  describe("GET /api/orders/:id", () => {
    it("should return order details", async () => {
      const response = await request(app)
        .get("/api/orders/order-123")
        .expect(200);

      expect(response.body).toEqual({ message: "Get order details" });
    });
  });

  describe("GET /api/orders/user/:userId", () => {
    it("should return user order history", async () => {
      const response = await request(app)
        .get("/api/orders/user/user-123")
        .expect(200);

      expect(response.body).toEqual({ message: "Get user order history" });
    });
  });

  describe("PUT /api/orders/:id/pay", () => {
    it("should mark order as paid", async () => {
      const response = await request(app)
        .put("/api/orders/order-123/pay")
        .expect(200);

      expect(response.body).toEqual({ message: "Mark order as paid" });
    });
  });

  describe("PUT /api/orders/:id/discount", () => {
    it("should apply discount to order", async () => {
      const response = await request(app)
        .put("/api/orders/order-123/discount")
        .send({ percentage: 10 })
        .expect(200);

      expect(response.body).toEqual({ message: "Apply discount to order" });
    });
  });

  describe("POST /api/orders/:id/cancel", () => {
    it("should cancel order", async () => {
      const response = await request(app)
        .post("/api/orders/order-123/cancel")
        .expect(200);

      expect(response.body).toEqual({ message: "Cancel order" });
    });
  });
});
