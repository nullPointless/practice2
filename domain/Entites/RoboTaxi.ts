export class RoboTaxi {
  private id: string;
  private location: string;
  private isAvailable: boolean;
  private state: "idle" | "en route" | "charging";

  constructor(id: string, location: string) {
    this.id = id;
    this.location = location;
    this.isAvailable = true;
    this.state = "idle";
  }

  public getId(): string {
    return this.id;
  }

  public getLocation(): string {
    return this.location;
  }

  public isRoboTaxiAvailable(): boolean {
    return this.isAvailable;
  }

  public getState(): "idle" | "en route" | "charging" {
    return this.state;
  }

  public updateLocation(newLocation: string): void {
    this.location = newLocation;
  }

  public setAvailability(available: boolean): void {
    this.isAvailable = available;
  }

  public setState(newState: "idle" | "en route" | "charging"): void {
    this.state = newState;
  }
}
