import type { ILocationService } from "../domain/Interfaces/LocationService.js";

export class WsLocationService implements ILocationService {
  async sednLocationToUser(
    userId: string,
    lat: string,
    long: string,
  ): Promise<void> {
    console.log(
      `Location sent to user ${userId}: Latitude ${lat}, Longitude ${long}`,
    );
  }
}
