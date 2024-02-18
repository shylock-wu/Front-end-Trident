// function getUrlParams(url) {
//   const paramsList = url.split('?')[1];
//   const params = paramsList.split('&');
//   const paramsObj = {};
//   params.forEach((item) => {
//     const keyValue = item.split('=');
//     paramsObj[keyValue[0]] = keyValue[1];
//   });
//   return paramsObj;
// }
// console.log('OUTPUT : ', getUrlParams('http://m.meijiabang.cn/index.html?key0=0&key1=1&key2=2'));

// function getQueryParams(urlString) {
//   // 创建一个新的 URL 对象
//   let url = new URL(urlString);
//   // 获取 URL 的查询参数部分
//   let searchParams = new URLSearchParams(url.search);
//   // 创建一个空对象来存储参数
//   let params = {};
//   console.log(searchParams);

//   // 对于每一个查询参数
//   for (let param of searchParams) {
//     // 将参数名和参数值添加到对象中
//     params[param[0]] = param[1];
//   }

//   // 返回参数对象
//   return params;
// }
// console.log(getQueryParams('http://example.com/?param1=value1&param2=value2'));

function getQueryParams(url) {
  let params = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
    params[key] = value;
  });
  return params;
}

console.log(getQueryParams('http://example.com/?param1=value1&param2=value2'));
