function calculator(){
    this.result=0;
    this.add = function(num){
        this.result+=num;
        return this;
    }
    this.subtract=function(num){
        this.result-=num
        return this;
    }
    this.multiply=function(num){
        this.result*=num;
        return this;
    }
    this.divide=function(num){
        if(num!==0){
            this.result/=num;
        }
        else{
            console.log(`Cannot divide by zero`);
        }
        return this;
    }
    this.printResult=function(){
        return this.result;
    }
    
}
let calculator1=new calculator();
let ans=calculator1.add(5).multiply(2).subtract(5).divide(5).printResult();
console.log(ans);
