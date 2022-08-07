
var MyQueue = function() {
    this.stack1 = []
    this.stack2 = []
    
    
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack1.push(x)
    
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    console.log(this.stack1)
   while(this.stack1.length !== 0){
       let popped = this.stack1.pop()
       this.stack2.push(popped)       
   }
    console.log(this.stack1)
    let pop = this.stack2.pop()
    console.log(pop)
    while(this.stack2.length !== 0){
       let popped = this.stack2.pop()
       this.stack1.push(popped)
   }
    return pop
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
   
 while(this.stack1.length !== 0){
       let popped = this.stack1.pop()
      this.stack2.push(popped)       
   }
    
   let pop = this.stack2.pop()
   this.stack2.push(pop)
    
    while(this.stack2.length !== 0){
       let popped = this.stack2.pop()
      this.stack1.push(popped)       
   }
    return pop
    
    
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
   return this.stack1.length === 0 ? true:false
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */