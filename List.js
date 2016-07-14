// double linked list
function Node(data) {
  this._next = null;
  this._previous = null;
  this.data = data;
}

Node.prototype = {
  getNodeValue: function() {
    return this.data;
  },
  getNextNode: function() {
    return this._next;
  },
  getPreviousNode: function() {
    return this_previous;
  }
};

function LinkedList() {
  this._head = null;
  this._tail = null;
  this.num = 0;
}

LinkedList.prototype = {
  // append node at the end of linked list
  appendNode: function(node) {
     if(this._tail) {
        this._tail._next = node;
        node._previous = this._tail;
        this._tail = node;
     } else {
        this._head = this._tail = node;
     }
  },
  getAt: function(index) {
    n = this._head;
    var i = 0;
    while(n) {
      if(i++ == index) return n;
      n = n._next;
    }
    return -1; // not found
  },
  // arr is indexes of nodes to be deleted
  // arr is assumed to be sorted in ascending order without any duplication
  removeNodesAt:function(arr) {
    n = this._head;
    var i = 0;
    var j = 0;
    while(n) {
      if(i == arr[j]) {
        var before = n._previous;
        var after = n._next;
        if(before) {
          before._next = after;
        } else {  // if it is the first Node
          this._head = after;
          if(after) after._previous = null;
        }
        if(after) { // if there is after
          after._previous = before;
          if(before) before.next = after;
        } else { // if it is the last one
          if(before) before.next = null;
        }
        j++;
      }
      n = n._next;
      i++;
    }
    return -1; // not found    
  }
}
 