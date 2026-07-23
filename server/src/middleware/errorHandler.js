// Handles requests to routes that do not exist.
// This must be registered AFTER all real routes.
export function notFoundHandler(req, res, next) {
  const error = new Error(`Route not found: ${req.method} ${req.originalUrl}`);
  error.status = 404;
  next(error);
}

// Centralized error handler.
// Any time code calls next(error) anywhere in the app, it ends up here.
// This must be registered LAST, after all routes and other middleware.
// eslint-disable-next-line no-unused-vars
export function errorHandler(err, req, res, next) {
  const status = err.status || 500;
  const message = err.message || "Internal server error";

  console.error(`[Error] ${req.method} ${req.originalUrl} ->`, message);

  res.status(status).json({
    error: {
      message,
      status,
    },
  });
}
