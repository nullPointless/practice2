export interface IAuthService {
  authenticateUser(username: string, password: string): Promise<string>; // Returns a token
  verifyToken(token: string): Promise<boolean>;
}
