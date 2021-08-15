function RequestException(response) {
  const err = new Error('RequestException');
  err.response = response;
  return err;
}
RequestException.prototype = Object.create(Error.prototype);

export { RequestException };
