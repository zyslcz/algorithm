/*var readline = require('readline');

//创建readline接口实例
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on("close", function(){
    // 结束程序
    process.exit(0);
});
*/
function quickSort(list) {
    if (list.length == 0) {
        return [];
    }
    let list1 = [];
    let list2 = [];
    const a = list[0];
    for (let i = 1 ;i < list.length ; i++){
        if (list[i] <= a){
            list1.push(list[i]);
        } else {
            list2.push(list[i]);
        }
    }
    return quickSort(list1).concat(a,quickSort(list2))//不加a每次递归都会减少两个元素最后返回空数组
}

/*
rl.question('是否开始插入数据（y/n）',function(answer){
    if(answer == 'n'){
        rl.close()
    } else if(answer == 'y') {
        console.log('请以 ’姓名：成绩‘的形式插入');
        const table = [];
        let x = 0;
        rl.on('line',async (line)=>{
            if (line != '排序') {
                table[x] = line.split('：');
                console.log(table);
                x++;
            } else {
                let a = [];
                for (let i = 0 ; i < table.length ; i++){
                    a.push(parseFloat(table[i][1]));
                }
                const y = quickSort(a);
                for (let i = 0 ; i < y.length ; i++){
                    for (let z = 0 ; z < y.length ; z++){
                        if (parseFloat(table[i][1]) == y[z]){
                            console.log(table[z][0]+':'+table[z][1]);
                        }
                    }
                }
            }
        })
    }
})
*/



