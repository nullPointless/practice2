export function createAuth0Middleware(authService: IAuthService) {
  return async function auth0Middleware(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ message: "Token missing from header" });
    }

    try {
      const isValid = await authService.verifyToken(token);
      if (!isValid) {
        return res.status(401).json({ message: "Invalid token" });
      }
      next();
    } catch (error) {
      console.error("Error verifying token:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
}
