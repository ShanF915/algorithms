// 整个HTML高度=浏览器可视区域+滚动距离


// 封装滚动距离
function getScrollOffset(){
  if(window.scrollX){
    return {
      left:window.scrollX,
      top:window.scrollY
    }
  }else if(window.pageXOffset){
    return {
      left:window.pageXOffset,
      top:window.pageYOffset
    }
  }else{
    return {
      left:document.body.scrollLeft+document.documentElement.scrollLeft,
      top:document.body.scrollTop+document.documentElement.scrollTop
    }
  }
}

// 封装浏览器可视区域
function getViewportSize(){
  if(window.innerWidth){
    return {
      width:window.innerWidth,
      height:window.innerHeight
    }
  }else{
    if(document.compatMode ==='BackCompat'){
      return{
        width:document.body.clientWidth,
        height:document.body.clientHeight
      }
    }else{
      return {
        width:document.documentElement.clientWidth,
        height:document.documentElement.clientHeight
      }
    }
  }
}

// 封装整个HTML文档宽高
function  getScrollSize(){
  if(document.body.scrollWidth){
    return {
      width:document.body.scrollWidth,
      height:document.body.scrollHeight
    }
  }else{
    return {
      width:document.documentElement.scrollWidth,
      height:document.documentElement.scrollHeight
    }
  }
}

// 封装获取样式
function getStyles(elem,prop){
  if(window.getComputedStyle){
    if(prop){
      return window.getComputedStyle(elem,null)[prop]
    }else{
      return window.getComputedStyle(elem,null)
    }
  }else{
    if(prop){
      return elem.currentStyle[prop]
    }else{
      return elem.currentStyle
    }
  }
}

// 封装事件监听
function addEvent(el,type,fn){
  if(el.addEventListener){
    el.addEventListener(type,fn,false)
  }else if(el.attachEvent){
    el.attachEvent('on'+type,function(){
      fn.call(this)
    })
  }else{
    el['on'+type]=fn;
  }
}