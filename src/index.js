
// You should implement your task here.

module.exports = function towelSort (matrix) {

  let newMatrix;

if (matrix == undefined || matrix.length == 0) {
    newMatrix = [];
} else {
    newMatrix = matrix.reduce((newArr, item, index) => newArr.concat(index%2 == 0 ? item : item.reverse()));
}

  return newMatrix;
}
