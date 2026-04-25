export class User {
  constructor(
    public readonly id: string,
    private _name: string,
    private _email: string,
  ) {
    if (!_name) {
      throw new Error("Ime korisnika ne smije biti prazno.");
    }
    if (!_email || !this.validateEmail(_email)) {
      throw new Error("Neispravan email korisnika.");
    }
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  // Poslovna logika unutar entiteta
  public updateEmail(newEmail: string): void {
    if (!this.validateEmail(newEmail)) {
      throw new Error("Neispravan email korisnika.");
    }
    this._email = newEmail;
  }

  private validateEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
}

export interface IUserRepository {
  saveUser(user: User): Promise<void>;
  getUserById(id: string): Promise<User | null>;
}
