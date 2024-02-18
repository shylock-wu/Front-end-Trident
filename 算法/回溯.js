// 给一个一维数字数组 求它的全排列

function subsets(num) {
  let res = [],
    arr = [];

  function find(start) {
    // 存储上一次得到的结果
    res.push([...arr]);
    for (let i = start; i < num.length; i++) {
      arr.push(num[i]);
      // 得到下一个
      find(i + 1);
      arr.pop();
    }
  }

  // 从0开始
  find(0);
  return res;
}

console.log(subsets([1, 2, 3, 4]));
// subsets([1, 2, 3]);
