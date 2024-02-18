// 节流 频繁触发,但只在 **特定的时间内才执行一次** 代码（不会重新计时）
function throttle(fn, delay) {
  let lastTime = 0;
  return function (...args) {
    const now = new Date();
    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}
// 防抖 频繁触发,但只在特定的时间内 **没有触发执行条件** 才执行一次代码（会重新计时）
function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
