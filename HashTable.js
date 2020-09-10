class HashTable{
    constructor(a){
        this.table = new Array(a);
    }
    Hsah(data){//哈希函数用于返回键的映射即索引
        let x = 37
        let a = 0
        for(let i = 0;i < data.length;++i){
            a+=a*x + data.charCodeAt(i)
        }
        a = a % this.table.length;
        if (a < 0) {
            a += this.table.length-1;
        }
        return parseInt(a)
    }
    push(data){//将散列值和原值推入哈希表
        let table = this.table;
        table[this.Hsah(data)] = data
    }
    display(){
        for(let i = 0;i < this.table.length; ++i){
            if(this.table[i] != undefined){
                console.log(i+':'+this.table[i])
            }
        }
    }
}
var yy =['1','2','4','d']
var xx = new HashTable(123)
for (var i = 0; i < yy.length; ++i) {
    xx.push(yy[i]);
}
xx.display()

