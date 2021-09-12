// 实例
// 用户频繁操作，只执行最后一次，如果触发事件不超过0.5s，
let t=null
input.oninput=function(){
  // 如果不是最后一次
  if(t){
    clearTimeout(t)
  }
  t=setTimeout(()=>{
    // 业务逻辑
    console.log(this.value);
  },500)
}


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

// 实例
// 控制执行次数,每隔多少秒执行一次
window.onscroll=function(){
  console.log(123);
}

let flag=true;
window.onscroll=function(){
  // 如果falg为true，只执行一次
  if(flag){
    setTimeout(()=>{
      console.log('hello');
      flag=true;
    },500)
  }
  flag=false;
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
      setTimeout(()=>{
        fn.call(this);
        flag=true;
      },delay)
    }
    flag=false;
  }
}