function bubbleSort(arr) {
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i; j > len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];        // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 *  优化：对冒泡排序常见的改进方法是加入一标志性变量exchange，用于标志某一趟排序过程中是否有数据交换
 *  如果进行某一趟排序时并没有进行数据交换，则说明数据已经按要求排列好，可立即结束排序，避免不必要的比较过程
 *  时间复杂度：O(n²)
 * **/
function bubbleSort1() {
  let i = arr.length - 1;//初始时,最后位置保持不变
  while (i > 0) {
    let pos = 0;//每趟开始时,无记录交换
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
        pos = j;//记录最后交换的位置
      }
    }
    i = pos;//为下一趟排序作准备
  }
  return arr;
}
