// undefined -> number NaN   string 'undefined' boolean false

// Symbol -> number error string error boolean true

// string -> number 默认Number() '123'-123  boolean 除'' 其余全为true
//                               '12-'-NaN
//                               '',' '-0
//                  parseInt()   '123'-123
//                               '12-'-12
//                               '',' '-0
// number -> strig 123-'123' boolean 除0 其余全为true

// null -> number 0 string 'null' boolean false

// boolean -> number true-1  string true-'true' 
//                   false-0        false-'false'


// 判断数据类型
// typeof
// instanceof
// Object.prototype.toString.call()


// null和undefined

// null 空指针对象
// undefined 未初始化的变量
// 红宝书上说undefined为明确区分未初始化的变量和空指针对象，但一般初始化时不赋值成undefined,没必要
// 赋值为null 时像有个对象，但不知道对象该保存什么，才赋值。
// null == undefined true
// null === undefined false


const a=10
const obj={
  a:13,
  b:()=>{
    console.log(this.a);//undefined
  },
  c:function(){
    console.log(this.a);//13
  },
  d:function(){
    return ()=>{
      console.log(this.a);//13
    }
  },
  e:function(){
    return this.b//undefined
  }
}

obj.b()
obj.c()
obj.d()()
obj.e()()




