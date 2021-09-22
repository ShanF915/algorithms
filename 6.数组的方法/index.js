// push()
// unshift()
// pop()
// shift()
// reserve()
// sort()
// splice()
// join()
// reduce()
// slice()

// push方法  尾插
Array.prototype.mypush=function(){
  // 遍历实参
  for(let i=0;i<arguments.length;i++){
    // 循环拿出实参，赋值到原数组的最后一位
    this[this.length]=arguments[i];
  }
  // 返回原数组长度
  return this.length
}
// unshift 头插 
Array.prototype.myunshift=function(){
  // 定义一个变量，赋值为0，目的是为了splice时确定位置
  let pop=0;
  for(let i=0;i<arguments.length;i++){
    // 把拿到的实参值赋值到原数组前面位置
    this.splice(pop,0,arguments[i])
    // 
    pop++;
  }
  return this.length
}
// 尾删
Array.prototype.mypop=function(){
  // 判断是否有值
  if(!this.length){
    return false;
  }
  // 记录删除的元素
  const num =this[this.length-1]
  this[this.length-1]=null;
  this.length--;
  return num
}

// 头删
Array.prototype.myshift=function(){
  // 判断是否有值
  if(!this.length){
    return false
  }
  const popnum=this[0];
  this[0]=null;
  for(let i=0;i<this.length;i++){
    this[i]=this[i+1]
  }
  this.length--;

  return popnum;
}

const arr=[1,2,3];
arr.mypush(4)
console.log(arr);
arr.myunshift(0)
console.log(arr);
arr.mypop()
console.log(arr);
arr.myshift();
console.log(arr);
// 返回下标
console.log(arr.indexOf(2));
//返回boolean  
console.log(arr.includes(2));
// 返回符合条件的第一个数
let result=arr.find(item=>{
  return item>1
})
console.log(result);
// 返回符合条件的第一个数的下标
console.log(arr.findIndex(item=>{return item>1}));

// 数组扁平化
let arr3=[1,2,3,[1,2,5],[1,[2,2]]];

// 1.es6
console.log(arr3.flat(Infinity)); 
// 2.递归
let newarr=[];
function flatter(arr){
   for(let i=0;i<arr.length;i++){
     if(Array.isArray(arr[i])){
      flatter(arr[i])
     }else{
       newarr.push(arr[i]);
     }
   }

   return newarr;
}
// 3.reduce
function flatter2(arr){
  return arr.reduce((prev,num)=>{
    return prev.concat(Array.isArray(num)?flatter2(num):num)
  },[])
}
// 4.直接拼接
while(arr3.some(Array.isArray)){
  arr3=[].concat(...arr3)
}

// 数组去重
// 1.indexof
function unique(arr){
  let newarr=[];
  for(let i=0;i<arr.length;i++){
    if(newarr.indexOf(arr[i])===-1){
      newarr.push(arr[i])
    }
  }
  return newarr
}

let brr=[1,1,2,3,5,1,2];
console.log(unique(brr));

// 2.es6
function unique2(arr){
  return Array.from(new Set(arr))
}
console.log(unique2(brr));


// 类数组
// ...
// Array.from
// Array.protptype.slice.call()

const slarr=[1,2,3,4,5,6];
const sl1=slarr.slice();
const sl2=slarr.slice(1);
const sl3=slarr.slice(3,5);
console.log(sl1);
console.log(sl2);
console.log(sl3);

const num=123;
const str=num.toString();
const numarr=str.split('');
console.log(str,numarr);

let num1=123;
const numarr1=[]
while(num1){
  numarr1.unshift(num1%10);
  num1=parseInt(num1/10);
}
console.log(numarr1);
console.log(numarr1.join());