const errors = {
    ValidationError: 400,
    UnauthorizedError: 401,
    NotFoundError: 404,
    conflictError: 409,
  };
  
  const errorHandler = (err, _req, res, _next) => {
    const { name, message } = err;
    console.log(err);
    const status = errors[name];
    if (!status) return res.status(500).json({ message: 'Internal error server' });
    return res.status(status).json({ message });
  };
  
  module.exports = errorHandler;