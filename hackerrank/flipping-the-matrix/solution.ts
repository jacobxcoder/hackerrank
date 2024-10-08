function flippingMatrix(matrix: number[][]): number {
  const n = matrix.length;
  let sum = 0;

  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n / 2; j++) {
      sum += Math.max(
        matrix[i][j],
        matrix[i][n - j - 1],
        matrix[n - i - 1][j],
        matrix[n - i - 1][n - j - 1],
      );
    }
  }

  return sum;
}
