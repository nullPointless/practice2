import { describe, it, expect } from "vitest";
import request from "supertest";
import express from "express";
import { setupRoutes } from "../index";

describe("Routes Setup", () => {
  it("should register all routes correctly", async () => {
    const app = express();
    app.use(express.json());
    setupRoutes(app);

    // Test user routes
    const userResponse = await request(app)
      .get("/api/users/user-123")
      .expect(200);
    expect(userResponse.body).toHaveProperty("message");

    // Test movie routes
    const movieResponse = await request(app).get("/api/movies").expect(200);
    expect(movieResponse.body).toHaveProperty("message");

    // Test order routes
    const orderResponse = await request(app)
      .get("/api/orders/order-123")
      .expect(200);
    expect(orderResponse.body).toHaveProperty("message");

    // Test subscription routes
    const subscriptionResponse = await request(app)
      .get("/api/subscriptions/sub-123")
      .expect(200);
    expect(subscriptionResponse.body).toHaveProperty("message");
  });

  it("should return 404 for non-existent routes", async () => {
    const app = express();
    setupRoutes(app);

    await request(app).get("/api/nonexistent").expect(404);
  });
});
