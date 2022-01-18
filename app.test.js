const strictEquals = (a, b) => {
  if (Object.is(a, b) && !isNaN(a, b)) {
    return true;
  } else if (Object.is(a, b) && isNaN(a, b)) {
    return false;
  } else {
    return false;
  }
};

// ----- TESTING ---------------------

describe("Given a strictEquals function", () => {
  describe("When it receives two identical numbers", () => {
    test("Then it should return true", () => {
      // Arrange
      const number = 1;
      const expectedResult = true;
      // Act
      const result = strictEquals(number, number);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});
