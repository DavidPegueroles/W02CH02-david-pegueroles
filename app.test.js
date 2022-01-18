const strictEquals = (a, b) => {
  if (Object.is(a, b) && !isNaN(a, b)) {
    return true;
  } else if (Object.is(a, b) && isNaN(a, b)) {
    return false;
  } else {
    return false;
  }
};
