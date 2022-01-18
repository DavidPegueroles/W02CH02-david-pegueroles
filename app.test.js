const strictEquals = (a, b) => {
  if (Object.is(a, b) && !isNaN(a, b)) {
    return true;
  } else if (Object.is(a, b) && isNaN(a, b)) {
    return false;
  } else if (a > -1 && a < 1 && b > -1 && b < 1) {
    return true;
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

  describe("When it receives two NaN", () => {
    test("Then it should return false", () => {
      // Arrange
      const value = NaN;
      const expectedResult = false;
      // Act
      const result = strictEquals(value, value);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives values 0,-0", () => {
    test("Then it should return true", () => {
      // Arrange
      const a = 0;
      const b = -0;
      const expectedResult = true;
      // Act
      const result = strictEquals(a, b);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives values -0,0", () => {
    test("Then it should return true", () => {
      // Arrange
      const a = -0;
      const b = 0;
      const expectedResult = true;
      // Act
      const result = strictEquals(a, b);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives values 1,'1'", () => {
    test("Then it should return false", () => {
      // Arrange
      const a = 1;
      const b = "1";
      const expectedResult = false;
      // Act
      const result = strictEquals(a, b);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives values true,false", () => {
    test("Then it should return false", () => {
      // Arrange
      const a = true;
      const b = false;
      const expectedResult = false;
      // Act
      const result = strictEquals(a, b);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives values false,false", () => {
    test("Then it should return true", () => {
      // Arrange
      const a = false;
      const b = false;
      const expectedResult = true;
      // Act
      const result = strictEquals(a, b);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });

  describe("When it receives values 'Water','oil'", () => {
    test("Then it should return false", () => {
      // Arrange
      const a = "Water";
      const b = "oil";
      const expectedResult = false;
      // Act
      const result = strictEquals(a, b);
      // Assert
      expect(result).toBe(expectedResult);
    });
  });
});
