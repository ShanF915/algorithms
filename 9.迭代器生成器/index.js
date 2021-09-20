const banji = {
  name: '终极一班',
  stus: [
    'xioming',
    'xiaoning',
    'xiaotian',
    'knight'
  ],
  [Symbol.iterator]() {
    let index = 0;
    // let _this=this;
    return {
      next: ()=>{
        if (index < this.stus.length) {
          const result = { value: this.stus[index], done: false };
          index++;
          return result;
        } else {
          return { value: undefined, done: true }
        }
      }
    }
  }
}

for (let v of banji) {
  console.log(v);
}

// 生成器
// 生成器就是一个特殊的函数,用于异步编程
//1s后打印111 然后两秒后打印222 然后三秒后打印333
function one(){
  setTimeout(()=>{
    console.log(111);
    iterator.next()
  },1000)
}
function two(){
  setTimeout(()=>{
    console.log(222);
    iterator.next()
  },2000)
}
function three(){
  setTimeout(()=>{
    console.log(333);
  },3000)
}

function *gen(){
  
  yield one();
  yield two();
  yield three();
}
let iterator=gen();
iterator.next()
// console.log(iterator.next());
function test(){
  console.log('test');
}
async function test1(){
  await test();
  console.log('test1');
}
test1()