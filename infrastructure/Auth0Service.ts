import type { IAuthService } from "../domain/Interfaces/AuthService.js";

export class Auth0Service implements IAuthService {
  async authenticateUser(username: string, password: string): Promise<string> {
    // Simulate authentication with Auth0
    if (username === "user" && password === "password") {
      console.log(`User ${username} authenticated successfully.`);
      return "mock-auth-token";
    } else {
      console.log(`Authentication failed for user ${username}.`);
      throw new Error("Invalid username or password.");
    }
  }

  async verifyToken(token: string): Promise<boolean> {
    // Simulate token verification with Auth0
    const isValid = token === "mock-auth-token";
    console.log(`Token verification result: ${isValid}`);
    return isValid;
  }
}
