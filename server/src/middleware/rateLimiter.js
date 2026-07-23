import rateLimit from "express-rate-limit";

// General API rate limiter.
// Limits every IP address to a fixed number of requests per time window.
// This protects the server from accidental infinite loops on the frontend
// and from basic abuse, without needing any login system.
export const apiRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // disable the deprecated `X-RateLimit-*` headers
  message: {
    error: {
      message: "Too many requests. Please try again later.",
    },
  },
});
