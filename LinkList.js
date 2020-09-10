class Node{
    constructor(element){
        this.element = element;
        this.next = null
    }
}
class LinkList {
    constructor() {
        this.head = new Node("head")
    }
    find(e){
        let x = this.head;
        try {
            while(x.element != e){
                x = x.next
            }
            return x
        }catch (e) {
            console.log('不能为空')
        }
    }
insert(e,ep){
    let Ep = this.find(ep);
    Ep.next =new Node(e)
}
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
    }
}
var a = new LinkList()

a.insert("e","head")
a.insert("c","e")
a.insert('d','c')
a.remove('d')
console.log(a.find('c'))


