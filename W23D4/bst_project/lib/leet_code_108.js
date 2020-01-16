// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {
  if (nums.length === 0) return null;

  let midIdx = Math.floor(nums.length / 2);
  let left = nums.slice(0, midIdx);
  let right = nums.slice(midIdx + 1);

  let root = new TreeNode(nums[midIdx]);

  if (left.length > 0) {
    root.left = sortedArrayToBST(left);
  }
  if (right.length > 0) {
    root.right = sortedArrayToBST(right);
  }

  return root;
}