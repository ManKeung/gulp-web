/**
 * 功能
 */

'use strict';

// 随机排序
function randomSort(arr, newArr) {
  // 如果原数组arr的length值等于1时，原数组只有一个值，其键值为0
  // 同时将这个值push到新数组newArr
  if (arr.length == 1) {
    newArr.push(arr[0]);

    return newArr; // 相当于递归退出
  }

  // 在原数组length基础上取出一个随机数
  var random = Math.ceil(Math.random() * arr.length) - 1;
  // 将原数组中的随机一个值push到新数组newArr中
  newArr.push(arr[random]);
  // 对应删除原数组arr的对应数组项
  arr.splice(random, 1);

  return randomSort(arr, newArr);
}

// 测试

//var arr = [1,2,3,4,5,6,7,8,9,10];
// var arr = [{a:1},{b:2},{c:3},{d:4},{f:6}];
// var newArr = [];

// randomSort(arr, newArr);
// console.log(newArr);
/**********************************************************/

// 排序
// var arr = [3,2,1,10,0];
// console.log(arr.sort((a,b)=>a-b));

/*{ // 验证用户是否离开页面
    // 兼容性：IE10+，Firefox10+,Chrome14+,Opera12.1+,Safari7.1+

  var hiddenProperty = 'hidden' in document ? 'hidden' :
  'webkitHidden' in document ? 'webkitHidden' :
  'mozHidden' in document ? 'mozHidden' : null;
  var visibilityChangeEvent = hiddenProperty.replace(/hidden/i, 'visibilitychange');

  document.addEventListener(visibilityChangeEvent, function() {

    if(!document[hiddenProperty]) {

      document.title = 0;
    } else {
      document.title = 1;
    }
  });

}*/
/**********************************************************/

// 用户选择类容
/*function getTxt() { // 方法要结合事件

  var txt = null;

  if(window.getSelect) {
    txt = window.getSelection().toString(); // 转化成字符串
  }else if(document.selection) {
    txt = document.selection.createRang().txt; // ie 写法
  }else {
    txt = 'no selection!!!'
  }

  return txt;
}*/
/**********************************************************/

/**
 * 时间戳转时间
 */

function commonTime(time) { //  注意有时候得到的时间戳要*1000
  var unixTimestamp = new Date(time);

  return unixTimestamp.toLocaleString();
}

/**
 * 字符串加密
 */

function compileStr(code) {
  var c = String.fromCharCode(code.charCodeAt(0) + code.length);

  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }

  return escape(c);
}

// console.log(compileStr('15170132937'));

/**
 * 字符进行解密
 */

function uncompileStr(code) {
  code = unescape(code);
  var c = String.fromCharCode(code.charCodeAt(0) - code.length);

  for (var i = 1; i < code.length; i++) {
    c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
  }

  return c;
}

// console.log(uncompileStr('%3Cffhgadeklj'));

/**
 * 判断ie
 */
function IEVersion() {
  var userAgent = navigator.userAgent; // 取得浏览器的userAgent字符
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1; // 判断是否是IE < 11 浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE; // 判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1;

  if(isIE) {
    var reIE = new RegExp('MSIE (\\d+.\\d+);');
    reIE.test(userAgent);
    var fIEVersion = parseFloat(RegExp['$1']);

    if(fIEVersion == 7) {
      return 7;
    }else if(fIEVersion == 8) {
      return 8;
    }else if(fIEVersion == 9) {
      return 9;
    }else if(fIEVersion == 10) {
      return 10;
    }else {
      return 6; // IE版本<=6
    }

  }else if(isEdge) {
    return 'edge';
  }else if(isIE11) {
    return 11; // IE11
  }else {
    return -1; // 不是ie
  }
}

/**
 * 前端排序算法
 */

// 测试数据
var arr = [1, 20, 10, 32, 11, 7, 88, 99, 5, 100, 64];

function swap(arr, i, j) { // 交换两个数组值 用es6的解构赋值更简单
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

// 1.Array.sort()

function arrSort(arr, re) { // re == true 倒序

  function sortNumber(a, b) { // 正序
    return a - b;
  }

  function sortNumberRe(a, b) { // 倒序
    return b - a;
  }

  return re === true ? arr.sort(sortNumberRe) : arr.sort(sortNumber);
}

// 测试
// console.log(arrSort(arr, true));
// console.log(arrSort(arr));

// 2. 冒泡排序

function bubbleSort(arr) {
  for(var i=0, len=arr.length-1; i<len; i++) {
    var flag = false; // 冒泡改进 增加一个标志位
    for(var j=0, le=arr.length-1-i; j<le; j++) {
      if(arr[j] > arr[j+1]) { // 小于符号就是倒序了
        swap(arr, j, j+1);
        flag = true;
      }
    }

    if(!flag) {
      break;
    }
  }

  return arr;
}

function improveBubble(arr, len) {
  for(var i=len-1; i>=0; i--) {
    var pos = 0;
    for(var j=0; j < i; j++) {
      if(arr[j] > arr[j+1]) { // 小于符号就是倒序了
        swap(arr, j, j+1);
        pos = j+1;
      }
    }
    len = pos + 1;
  }

  return arr;
}

// 测试
// console.log(bubbleSort(arr));
// console.log(improveBubble(arr, arr.length));

// 3.选择排序

function selectionSort(arr) {
  for(var i=0, len=arr.length-1; i<len; i++) {
    var index = i;
    for(var j=i+1, le=arr.length; j<le; j++) {
      if(arr[index] > arr[j]) { // 小于符号就是倒序
        index = j;
      }
    }
    swap(arr, i, index);
  }
  return arr;
}

// 测试
// console.log(selectionSort(arr));

// 4.插入排序

function insertSort(arr) {
  for(var i=0, len=arr.length; i<len; i++) {
    var temp = arr[i];
    for(var j=0; j<i; j++) {
      if(temp < arr[j] && j===0) {
        arr.splice(i, 1);
        arr.unshift(temp);
        break;
      }else if(temp > arr[j] && temp < arr[j+1] && j < i-1) {
        arr.splice(i, 1);
        arr.splice(j+1, 0, temp);
        break;
      }
    }
  }
  return arr;
}

// 测试
// console.log(insertSort(arr));

// 5.快速排序

function quickSort(arr) {
  if(arr.length <= 1) {
    return arr;
  }

  var temp = arr[0];
  var left = [];
  var right = [];

  for(var i=1, len=arr.length; i<len; i++) {
    if(arr[i] > temp) { // 小于符号倒序排列
      right.push(arr[i]);
    }else {
      left.push(arr[i]);
    }
  }

  return quickSort(left).concat([temp], quickSort(right));
}

// 测试
// console.log(quickSort(arr));
