// 整个HTML高度=浏览器可视区域+滚动距离


// 封装滚动距离
// window.pageXOffset/window.pageYOffset
// window.scrollX/window.scrollY
// document.body.scrollLeft/document.body.scrollTop
// document.documentElement.scrollLeft/document.documentElement.scrollTop
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
// window.innerWidth/window.innerHeight
// document.body.clientWidth/document.body.clientHeight  怪异模式
// document.documentELement.clientWidth/document.documentElement.clientHeight
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
// document.body.scrollWidth/document.body.scrollHeight
// document.documentElement.scrollWidth/document.documentElement.scrollHeight
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
// window.getComputedStyle(elem,null)[prop]
// docuemnt.currentStyle(elem,null)[prop]
function getStyles(elem,prop){
  if(window.getComputedStyle){
    if(prop){
      return window.getComputedStyle(elem,null)[prop]
    }else{
      return window.getComputedStyle(elem,null)
    }
  }else{
    if(prop){
      return document.currentStyle(elem,null)[prop]
    }else{
      return document.currentStyle(elem,null)
    }
  }
}

// 封装事件监听
// elem.addEventListener(type,fn,false)
// elem.attachEvent(type,fn)
function addEvent(el,type,fn){
  if(el.addEventListener){
    el.addEventListener(type,fn,false)
  }else if(el.attachEvent){
    el.attachEvent('on'+type,function(){
      fn.call(this);
    })
  }else{
    el['on'+type]=fn;
  }
}

// 封装取消事件
// elem.removeEventListener(type,fn,fasle)
// elem.detachEvent(type,fn)
function removeEvent(elem,type,fn){
  if(elem.removeEventListener){
    elem.removeEventListener(type,fn,fasle)
  }else if(elem.detachEvent){
    elem.detachEvent('on'+type,fn)
  }else{
    elem['on'+type]=null;
  }
}

// 封装取消冒泡
// event.stopPropagation
// event.cancelBubble=true
function stopBubble(e){
  let e=e||window.event;
  if(e.stopPropagation){
    e.stopPropagation();
  }else{
    e.cancelBubble=true;
  }
}

// 封装取消默认事件
// event.preventDefault()
// event.returnValue=false
function preventDefaultEvent(e){
  let e=e||window.event;
  if(e.preventDefault){
    e.preventDefault()
  }else{
    e.returnValue=false;
  }
}

// 封装pageX/Y
// pageX/Y=clientX/Y+scrollX/Y-文档偏移
// 相对于整个文档的距离=相对于浏览器视口的距离+滚动条滚动的距离——文档偏移的距离
function pagePos(e){
  let e=e||window.event;
  let sLeft=getScrollOffset().left,
      sTop=getScrollOffset().top,
      cLeft=document.documentElement.clientLeft,
      cTop=document.documentElement.clientTop
  return {
    X:e.clientX+sLeft-cLeft,
    Y:e.cliemtY+sTop-cTop
  }
}

// 事件对象兼容性
let e=e||window.event

// 事件源兼容性
let tar= e.target||e.srcElement;

