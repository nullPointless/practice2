import type { ILocationService } from "../../domain/LocationService/LocationService.js";

export class MockLocationService implements ILocationService {
  async sendLocation(): Promise<{ latitude: number; longitude: number }> {
    // Mock implementation - replace with actual location sending logic
    console.log("Sending location...");

    return {
      latitude: 37.7749, // Example latitude
      longitude: -122.4194, // Example longitude
    };
  }
}
