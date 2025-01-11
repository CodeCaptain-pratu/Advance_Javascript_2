Array.prototype.customInclude=function(element){
    for(let i=0;i<this.length;i++){
        if(this[i]===element){
            return true;
        }
    }
    return false;
}

let arr=[1,2,3,4,5];
console.log("cheak 3 is present or not : ",arr.customInclude(3));
console.log("check 6 is present or not : ",arr.customInclude(6));
console.log("check 10 is present or not : ",arr.customInclude(10));
console.log("check 1 is present or not : ",arr.customInclude(1));


