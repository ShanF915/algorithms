const a={val:'a'};
const b={val:'b'};
const c={val:'c'};
const d={val:'d'};

a.next=b;
b.next=c;
c.next=d;

// 遍历链表
let p=a;
while(p){
  console.log(p.val);
  p=p.next;
}

// 插入
const e={val:'e'};
c.next=e;
e.next=d;

// 删除e
c.next=d;

// 删除链表中的节点
var deleteNode=function(node){
  node.val=node.next.val;
  node.next=node.next.next;
}

// 反转链表
// 双指针一前一后遍历链表，最后反转双指针

