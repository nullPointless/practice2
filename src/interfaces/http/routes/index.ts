import express, { Application } from "express";
import { createUserRoutes } from "./userRoutes";
import { createMovieRoutes } from "./movieRoutes";
import { createOrderRoutes } from "./orderRoutes";
import { createSubscriptionRoutes } from "./subscriptionRoutes";

/**
 * Sets up all API routes for the application
 * Follows Clean Architecture patterns with dependency injection
 */
export function setupRoutes(app: Application): void {
  app.use("/api/users", createUserRoutes());
  app.use("/api/movies", createMovieRoutes());
  app.use("/api/orders", createOrderRoutes());
  app.use("/api/subscriptions", createSubscriptionRoutes());
}
