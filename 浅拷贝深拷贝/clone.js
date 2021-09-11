// Object.assign();

const obj1={
  name:'adfa',
  age:21,
  child:{
    name:'孩子'
  }
}

// 浅拷贝
function assign(target){
  // 判断你是不是引用数据类型
  if(typeof target === 'object' && typeof target !==null){
    // 创建一个空的对象或数组
    const newassign=Array.isArray(target)?[]:{};
    // 把原来对象进行遍历
    for(let item in target){
      // 判断属性是否在对象自身上
      if(target.hasOwnProperty(item)){
        newassign[item]=target[item];
      }
    }
    // 把新的对象或数组返回出去
    return newassign;
  }else{
    // 如果时基本数据类型就直接返回
    return target
  }
}

const obj2=assign(obj1);
console.log(obj2);
const obj3=Object.assign(obj1);
console.log(obj3);

// 深拷贝
function deepclone(target){
  // 先判断是不是基本数据类型
  if(typeof target === 'object' && typeof target !== null){
    // 创建一个新的数组或者对象
    const newdeep=Array.isArray(target)?[]:{};
    // 遍历
    for(let item in target){
      // 判断是否是自身上的属性
      if(target.hasOwnProperty(item)){
        // 判断是否是引用数据类型
        if(typeof target[item] ==='object' && typeof target[item] !== null){
          newdeep[item]=deepclone(target[item])
        }else{
          newdeep[item]=target[item];
        }
      }
    }
    return newdeep;
  }else{
    return target;
  }
}

const obj4=deepclone(obj1);

console.log(obj4);
obj4.child.name='sdf';
console.log(obj4,obj1);

const obj5=JSON.parse(JSON.stringify(obj1));
console.log(obj5);