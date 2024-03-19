const errorNumber = (value) => {
  return typeof value !== "number" || isNaN(value);
}

export default errorNumber;
