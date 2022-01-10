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

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
	 if(!this.root) return;
	  
  	let currNode = this.root;
  
		while(currNode){
    	if(currNode.val === val) return currNode;//base case
      
      if(val < currNode.val){
      	if(currNode.left){//if 
        	currNode = currNode.left;
        }
      	
      }else if(val > currNode.val){
      	if(currNode.right){//if 
        	currNode = currNode.right;
        }
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

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

  dfsPreOrder() {

  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {

  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {

  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {

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
