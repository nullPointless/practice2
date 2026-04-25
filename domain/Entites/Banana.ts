import type { Eatable } from "../Interfaces/Eatable.js";
import type { Holdable } from "../Interfaces/Holdable.js";

export class Banana implements Eatable, Holdable {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly length: number,
    public readonly ripeness: number,
  ) {
    if (!name) {
      throw new Error("Ime banane ne smije biti prazno.");
    }
    if (length <= 0) {
      throw new Error("Dužina banane mora biti veća od nule.");
    }
    if (ripeness < 0 || ripeness > 10) {
      throw new Error("Zrelost banane mora biti između 0 i 10.");
    }
  }

  public eat(): void {
    console.log(`Banana ${this.name} je pojedena.`);
  }

  public hold(): void {
    console.log(`Banana ${this.name} je zadržana.`);
  }
}
