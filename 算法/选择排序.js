// 选择排序（Selection sort）是一种简单直观的排序算法，无论什么数据进去都是 O(n²)的时间复杂度，所以用到它的时候，数据规模越小越好

/**
 * 其基本思想是：首先在未排序的数列中找到最小(or最大)元素，然后将其存放到数列的起始位置
 *
 * 然后再从剩余未排序的元素中继续寻找最小(or最大)元素，然后放到已排序序列的末尾
 *
 * 以此类推，直到所有元素均排序完毕
 * **/

function selectionSort(arr) {
  const len = arr.length;
  let minIndex, temp;
  for (let i = 0; i < len - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j; // 将最小数的索引保存
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
