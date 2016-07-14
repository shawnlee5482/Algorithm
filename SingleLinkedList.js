// double linked list
function Node(data) {
  this._next = null;
  this.data = data;
}

Node.prototype = {
  getNodeValue: function() {
    return this.data;
  },
  getNextNode: function() {
    return this._next;
  }
};

function SingleLinkedList() {
  this._head = null;
  this._tail = null;
  this.num = 0;
}

SingleLinkedList.prototype = {
  // append node at the end of linked list
  appendNode: function(node) {
     if(this._tail) {
        this._tail._next = node;
        this._tail = node;
     } else {
        this._head = this._tail = node;
     }
  },
  getHead: function() {
    return this._head;
  },
  getAt: function(n) {
    if(n < 0) return null;

    var i = 0;
    curr = this._head;
    while(curr) {
      if(i == n) return curr;
      curr = curr.getNextNode();
      i++;
    }
    return null;
  }
}
 