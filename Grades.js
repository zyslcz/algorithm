class Student{

    constructor(element){
        this.element = element;
        this.next = null
    }

}

class Grades {

    constructor() {
        this.head = new Student("head")
        this.nums = 0
    }

    find(e){
        let x = this.head;
        try {
            while(x.element != e){
                x = x.next
            }
                return x
            }catch (e) {
            console.log('学生成绩不能为空')
        }
    }

    insert(e,ep){
        let Ep = this.find(ep);
        Ep.next = new Student(e);
        this.nums++
    }

    //删除某元素需要找到其前一个元素
    fp(e){
        let x = this.head;
        while (x.next.element != e && x.next != null){
            x = x.next;
        }
        return x
    }

    remove(e){
        let x = this.fp(e)
        x.next = x.next.next
        this.nums--
    }

    change(e,en){
        this.find(e).element = en;
    }

    average(){
            var av = 0;
            var x = this.head;
            for (let i = 0 ; i <= this.nums ; i++ ){
                if(x.next != null && x.next != 0){
                av +=x.next.element;
                x = x.next
                }
            }
            return av/this.nums;
    }

}

var a = new Grades()
a.insert(11,'head')
a.insert(33,11)
a.insert(3,11)
a.insert(55,3)
a.remove(3)
a.change(55,99)
console.log(a.find(11))
console.log(a.average())
