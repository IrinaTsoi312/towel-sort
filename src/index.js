
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  const result = [];
  matrix.forEach(item => {
    if(matrix.indexOf(item) % 2 === 0) {
      result.push(...item);
    }
    else if(matrix.indexOf(item) % 2 === 1) {
      result.push(...(item.reverse()));
    }    
  });
  return result;
}