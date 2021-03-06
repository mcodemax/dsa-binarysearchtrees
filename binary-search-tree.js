class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    
    let currNode = this.root;
    
    while(true){
      if(currNode.val > val){
        if(!currNode.left){
           currNode.left = new Node(val);
           return this;
        }else{
           currNode = currNode.left;
        }
      }else if(currNode.val < val){
        if(!currNode.right){
           currNode.right = new Node(val);
           return this;
        }else{
           currNode = currNode.right;
        }
      }
      
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val) {//might need another param #2 for curr Node, for recur to match same as tests.
		if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    
    function helpRec(currNode){
    
      if(val < currNode.val){
      	//if val less than currnode's val place left
        if(!currNode.left){
        	currNode.left = new Node(val);
          return this;
        }else{//if there's a node on the left
        	helpRec(currNode.left);
        }
      }else if(val > currNode.val){
      	if(!currNode.right){
        	currNode.right = new Node(val);
          return this;
        }else{//if there's a node on the left
        	helpRec(currNode.right);
        }
      }
    }

    helpRec(this.root)

    return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    if(!this.root) return;
	  
    let currNode = this.root;
    let found = false;
  
		while(currNode && !found){
    	if(currNode.val === val) return currNode;//base case

      if(val < currNode.val){
        	currNode = currNode.left;
      }else if(val > currNode.val){
        	currNode = currNode.right;
      }else{
        found = true;
      }
    }

    if(!found) return undefined;

    return currNode;
  }

  // /** findRecursively(val): search the tree for a node with value val.
  //  * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currNode = this.root) {
		if(!this.root) return;
    
    console.log(currNode.val)
    if(currNode.val === val) return currNode;//base case
      
    if(val < currNode.val){
      if(currNode.left){//if 
        return this.findRecursively(val, currNode.left);
      }
    }else if(val > currNode.val){
      if(currNode.right){//if 
        return this.findRecursively(val, currNode.right);
      }
    }
  }


  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(arr = [], currNode = this.root) {
		if(!this.root) return [];
    
    arr.push(currNode.val)
    
    if(currNode.left){
    	this.dfsPreOrder(arr, currNode.left); //don't return this
    }
    
    if(currNode.right){
    	this.dfsPreOrder(arr, currNode.right); ////don't return this
    }
    
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(arr = [], currNode = this.root) {
	if(!this.root) return [];
    
    if(currNode.left){
    	this.dfsInOrder(arr, currNode.left); //don't return this
    }
    
    arr.push(currNode.val)
    
    if(currNode.right){
    	this.dfsInOrder(arr, currNode.right); ////don't return this
    }
    
    return arr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(arr = [], currNode = this.root) {
	if(!this.root) return [];
    
    if(currNode.left){
    	this.dfsPostOrder(arr, currNode.left); //don't return this
    }
    
    if(currNode.right){
    	this.dfsPostOrder(arr, currNode.right); ////don't return this
    }
    
    arr.push(currNode.val)
    
    return arr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
		const queue = [];
    const data = [];
    let currNode = this.root;
    
    queue.push(currNode);
    
    while(queue.length){
    	currNode = queue.shift();
      data.push(currNode.val);
      if(currNode.left){
      	queue.push(currNode.left);
      }
      if(currNode.right){
      	queue.push(currNode.right);
      }
    
    }
    
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
