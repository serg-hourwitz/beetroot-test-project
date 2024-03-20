const errorName = (value) => {
  return (
    typeof value !== "string" || value.toLowerCase() === value.toUpperCase()
  );
}

export default errorName;