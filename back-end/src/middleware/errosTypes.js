const throwNotFoundError = (message) => {
    const err = new Error(message);
    err.name = 'NotFoundError';
    throw err;
  };
  
  const throwUnauthorizedError = (message) => {
    const err = new Error(message);
    err.name = 'UnauthorizedError';
    throw err;
  };
  
  const ValidationError = (message) => {
    const err = new Error(message);
    err.name = 'ValidationError';
    throw err;
  };
  
  const conflictError = (message) => {
    const err = new Error(message);
    err.name = 'ConflictError';
    throw err;
  };
  
  module.exports = {
    throwNotFoundError,
    throwUnauthorizedError,
    ValidationError,
    conflictError,
  };
  