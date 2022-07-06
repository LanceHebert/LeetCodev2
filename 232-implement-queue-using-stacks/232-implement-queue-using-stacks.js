class MyQueue{
        
    constructor(){
       this.pushStack = []
       this.popStack = []
    }
     
    push(val){
      this.pushStack.push(val)  
    }
    
    pop(){
        
        while(this.pushStack.length){
            this.popStack.push(this.pushStack.pop())
        }
        
        
        let answer = this.popStack.pop()
        
        
        while(this.popStack.length){
            this.pushStack.push(this.popStack.pop())
        }
        return answer
    }
    
    peek(){
        return this.pushStack[0]
    }
    
    empty(){
        return this.pushStack.length === 0 
       
    }
    
}