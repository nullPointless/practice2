export interface ILocationService {
  sendLocation(): Promise<{ latitude: number; longitude: number }>;
}
