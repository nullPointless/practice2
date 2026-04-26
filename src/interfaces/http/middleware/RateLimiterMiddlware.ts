export function crestRateLimiter(options: { windowMs: number; max: number }) {
  const { windowMs, max } = options;
  const ipMap = new Map<string, { count: number; firstRequestTime: number }>();

  return function rateLimiter(req: any, res: any, next: any) {
    const ip = req.ip || req.connection.remoteAddress;

    const currentTime = Date.now();
    const ipData = ipMap.get(ip);

    if (ipData) {
      if (currentTime - ipData.firstRequestTime < windowMs) {
        if (ipData.count >= max) {
          res.status(429).send("Too many requests. Please try again later.");
          return;
        } else {
          ipData.count++;
        }
      } else {
        ipMap.set(ip, { count: 1, firstRequestTime: currentTime });
      }
    } else {
      ipMap.set(ip, { count: 1, firstRequestTime: currentTime });
    }

    next();
  };
}
