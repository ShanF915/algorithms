
// 防抖
function debounce(fn, delay) {
  let t = null;
  return function () {
    if (t !== null) {
      clearTimeout(t)
    }
    t = setTimeout(() => {
      fn.call(this)
    }, delay);
  }
}
// 节流
function throttle(fn, delay) {
  let flag = true;
  return function () {
    if (falg) {
      setInterval(() => {
        fn.call(this)
        falg=true;
      }, delay)
    }
    flag = false;
  }
}

// 防抖
function debounce(fn, delay) {
  let item = null;
  return function () {
    if (item!==null) {
      clearTimeout(item)
    }
    item = setTimeout(() => {
      fn.call(this);
    }, delay)
  }
}

// 节流
function throttle(fn,delay){
  let flag=true;
  return function(){
    if(flag){
      
    }
  }
}