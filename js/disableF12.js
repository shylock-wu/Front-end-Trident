(function () {
  console.log('%c 你好!! ', 'color:red;font-size:30px;');
  var callbacks = [],
    timeLimit = 50,
    open = false;
  setInterval(loop, 500);
  return {
    addListener: function (fn) {
      callbacks.push(fn);
    },
    cancleListenr: function (fn) {
      callbacks = callbacks.filter(function (v) {
        return v !== fn;
      });
    }
  };
  function loop() {
    const startTime = new Date();
    debugger;
    if (new Date() - startTime > timeLimit) {
      if (!open) {
        callbacks.forEach(function (fn) {
          fn.call(null);
        });
      }
      open = true;
      window.stop();
      // $(location).attr('href', 'https://www.baidu.com/');
      window.document.location.href = 'https://www.baidu.com/';
    } else {
      open = false;
    }
  }
})();
