// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

var minPathSum = function (grid) {
  if (!grid[0]) return 0;
  if (grid.length === 1) {
    let sum = 0;
    grid[0].forEach(num => sum += num);
    return sum;
  }
  if (grid[0].length === 1) {
    let sum = 0;
    grid.forEach(row => {
      sum += row[0]
    });
    return sum;
  }

  //right
  let rightGrid = [];
  grid.forEach(row => rightGrid.push(row.slice(1)));


  //down
  let downGrid = grid.slice(1);

  let currentCount = grid[0][0];
  let rightResult = minPathSum(rightGrid);
  let downResult = minPathSum(downGrid);

  if (rightResult > downResult) {
    console.log(downResult);
    return currentCount + downResult;
  } else {
    console.log(rightResult);
    return currentCount + rightResult;
  }

};
