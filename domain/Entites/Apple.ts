import type { Eatable } from "../Interfaces/Eatable.js";
import type { Holdable } from "../Interfaces/Holdable.js";

export class Apple implements Eatable, Holdable {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly color: string,
    public readonly weight: number,
  ) {
    if (!name) {
      throw new Error("Ime jabuke ne smije biti prazno.");
    }
    if (!color) {
      throw new Error("Boja jabuke ne smije biti prazna.");
    }
    if (weight <= 0) {
      throw new Error("Težina jabuke mora biti veća od nule.");
    }
  }

  public eat(): void {
    console.log(`Jabuka ${this.name} je pojedena.`);
  }

  public hold(): void {
    console.log(`Jabuka ${this.name} je zadržana.`);
  }
}
