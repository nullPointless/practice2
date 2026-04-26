export interface ILocationService {
  sednLocationToUser(userId: string, lat: string, long: string): Promise<void>;
}
