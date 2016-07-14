// double linked list
function BSTNode(value) {
  this._left_child = null;
  this._right_child = null;
  this._parent = null;
  this._value = value;
}

BSTNode.prototype = {
  getNodeValue: function() {
    return this._value;
  },
  getLeftChildNode: function() {
    return this._left_child;
  },
  getRightChildNode: function() {
    return this._right_child;
  }
};

function BinarySearchTree() {
  mythis = this;
  mythis._root = null;
}

BinarySearchTree.prototype = {
  // append node at the end of linked list
  getRootNode: function() {
    return mythis._root;
  },

  Search: function(self, value) {
     return (function SearchInternal(self, value) {
       if(self == null || self._value == value) {
          return self;
       } else if(value < self._value) {  // then it is in the left sub tree
          return SearchInternal(self._left_child, value);
       } else if(value > self._value) {
          return SearchInternal(self._right_child, value);
       }
     })(self, value);
  },

  Insert: function(value) {
    self = mythis._root;
    mythis._root;  // to access from InsertInternal
    (function InsertInternal(self, value) {
      if(self == null) {
        self = new BSTNode(value);
        if(!mythis._root) mythis._root = self;   
        return self; 
      } else {
       if(value < self._value) {  // then it is in the left sub tree
          var newNode = InsertInternal(self._left_child, value);
          self._left_child = newNode;
          newNode._parent = self;
       } else {
          var newNode = InsertInternal(self._right_child, value);
          self._right_child = newNode;
          newNode._parent = self;          
       }
      }
      return self; 
    })(self, value);
  },

  FindMinimum: function(self) {
    while(self._left_child) {
      self = self._left_child;
    }
    return self;
  },

  ReplaceNodeInParent: function(self, newNode) {
    console.assert(self._parent);
    if(self._parent._left_child == self)  {
        self._parent._left_child = newNode;
        if(newNode) newNode._parent = self._parent;
        if(self._right_child) newNode._right_child = self._right_child;
    } else if(self._parent._right_child == self) {
        self._parent._right_child = newNode;
        if(newNode) newNode._parent = self._parent;
        if(self._left_child) newNode._left_child = self._left_child;
    }
  },

  BinaryTreeDelete: function(self, value) {   // indiate node to be deleted by 'value'
    (function internalBinaryTreeDelete(self, value) {
      if(self._value < value) { // it is on the right wing
        internalBinaryTreeDelete(self._right_child, value);
      } else if(self._value > value) {
        internalBinaryTreeDelete(self._left_child, value);
      } else {
        if(self._right_child && self._left_child) {  // if there is a child on both
          // calc minimum of right wing
          // set the right child as the successor and internal binray tree delete recursively
          var minNodeRight = mythis.FindMinimum(self._right_child);
          mythis.ReplaceNodeInParent(self, minNodeRight);
        } else if(self._right_child) { // if there is a child on the right wing, link the child
          mythis.ReplaceNodeInParent(self, self._right_child);
        } else if(self._left_child) { // if there is a child on the left wing, link to the child
          mythis.ReplaceNodeInParent(self, self._left_child);
        } else {  // if there is no children, just remove it
          mythis.ReplaceNodeInParent(self, null);  // since it is end connect it with null
        }
      }
    })(self, value); 
  }
}
 