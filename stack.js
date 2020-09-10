class StackorQueue {
    constructor(){
        this.items = []//构件数组以[]效率最高而非new Array
    }
    push(e){
        this.items.push(e)
    }
    pop(){
        return this.items.pop()
    }
    shift(){
        return this.items.shift()
    }
    unshift(e){
        return this.items.unshift(e)
    }
    find(e){
        for (let i = 0 ; this.items[i] = e ; ++i){
            return i+1
        }
    }
    remove(e){
        var re = this.find(e)
        return this.items.splice(re,1)
    }
    clear(){
        delete this.items
        this.items = []
    }
    get size(){//get用于返回类的属性而非动作
        return this.items.length
    }
}
var x = new StackorQueue()
x.push(3)
x.push(4)
x.push(5)
x.unshift(1)
console.log(x.shift())
function mulBase(num,Base) {
    var a = new StackorQueue()
    do {
        a.push(num % Base);
        num = Math.floor(num/Base);
    } while (num > 0);
    var aa ='';
    while(a.size>0){
        aa+=a.pop()
    }
    return aa
}
console.log(mulBase(2,2))
//基数排序
function RadixSort(nums,queues,digit){//queues为内含nums元素个数的二维空队列，digit为数位
    for (let i = 0;i < nums.size; ++i){
        if (digit == 1){
            queues[nums[i]%10].unshift(nums[i])
        }
        else {
            queues[Math.floor(nums[i]/10)].unshift(nums[i])
        }
    }
}

