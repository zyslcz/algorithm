var readline = require('readline');

//创建readline接口实例
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.on("close", function(){
    // 结束程序
    process.exit(0);
});

class car {
    constructor(num){
        this.num = num;
        this.inT = '';
        this.outT = '';
        this.Exp = this.outT-this.inT
    }
}

class Park{
    constructor(props) {
        this.inNums = new Array();
        this.outNums = new Array();
        this.inSize = 0;
        this.outSize = 0;
    }

    carIn(x) {
        if(this.inSize<5){
            const xx = new car(x);
            xx.inT = new Date().valueOf()
            this.inNums.push(xx)
            this.inSize++;
        } else{
            this.outNums.push(new car(x))
            this.outSize++
        }
    }

    find(e){
        let i = 0;
        while(this.inNums[i].num != e){
            i++
        }
        return i
    }

    carOut(e){
        const re = this.find(e)
        if(this.outSize >= 1){
            this.inNums.splice(re,1);
            this.inSize--
            const x = this.outNums.shift().num;
            this.carIn(x)
            this.inNums[re].Exp = (this.inNums[4].inT-this.inNums[re].inT)/600000
            console.log(e+'车消费合计'+this.inNums[re].Exp+'元/(每分钟0.1元)')
            this.outSize--
        }else {
            this.inSize--;
            return this.inNums.splice(re,1);
        }
    }

}

const x = new Park();

rl.question('是否开始插入数据（y/n）',function(answer){
    if(answer == 'n'){
        rl.close()
    } else if(answer == 'y') {
        console.log('好的,开始插入！(退出系统请在插入车牌号位置输入\'结束\')')
                console.log('开始插入数据：（输入‘结束’则进程结束；输入‘离开’则开出车辆）')
                rl.on('line',function (line1) {
                    if(line1 != '结束' && line1 != '离开' && !(line1 in x.inNums) ){
                        x.carIn(line1)
                        console.log('你已插入车'+line1)
                        console.log('停车场外剩余'+x.outSize+'辆车');
                        console.log('停车场剩余'+x.inSize+'辆车');
                        console.log('请继续插入车牌号：')
                    }else if(line1 == '离开') {
                        console.log('请输入离开车牌号（输入结束则终止程序）')
                        rl.on('line',function (line2) {
                            if(line2 != '结束'){
                                x.carOut(line2);
                                console.log('停车场外剩余'+x.outSize+'辆车');
                                console.log('停车场剩余'+x.inSize+'辆车');
                            } else {
                                rl.close();
                            }
                        })
                    }else if(line1 == '结束'){
                        rl.close();
                    }

            })
    } else {
        console.log('请重新运行程序')
    }
});
