class Node {
    constructor(val,char){
        this.val = val;
        this.char = char;
        this.left = null;
        this.right = null;
    }
}

class HuffmanCoding{

    constructor(str) {
        this.str = str
        let hash = {};
        for(let i = 0; i < str.length; i++){
            hash[str[i]]=~~hash[str[i]]+1;//~~如果不是数字或true可以返回0
        }
        this.hash = hash;
    }

    getHuffmanTree(){//利用森林构造HuffmanTree

        let forset = [];
        for (let a in this.hash){
            let node =new Node(this.hash[a],a)
            forset.push(node)
        }
        let tem = [];
        while(forset.length !== 1){

            forset.sort((a,b)=>{
                return a.val-b.val;
            });


            let node = new Node(forset[0].val+forset[1].val,'')
            tem.push(forset[0]);
            tem.push(forset[1]);
            node.left = tem[tem.length-2];
            node.right = tem[tem.length-1];

            forset = forset.slice(2);
            forset.push(node);

        }
        return forset[0]
    }

    getCode(tree) {
        let map = {};
        let trl = (Node, cPath) => {
            if (!Node.length && !Node.right) {
                return;
            }
            if (Node.left && !Node.left.left && !Node.left.right){
                map[Node.left.char] = cPath + '0';
            }
            if (Node.right && !Node.right.left && !Node.right.right){
                map[Node.right.char] = cPath + '1';
            }
            // 往左遍历，路径加0
            if(Node.left){
                trl(Node.left, cPath + '0');
            }
            // 往右遍历，路径加1
            if(Node.right){
                trl(Node.right, cPath + '1');
            }
        };
        trl(tree, '');
        return map;
    }

    forEvery(){
        let a = '';
        let y = this.getCode(this.getHuffmanTree())
        for (let i = 0 ; i < this.str.length ; i++){
            a += y[this.str[i]]
        }
        return a
    }

}
const x = new HuffmanCoding('saddadsafds')
console.log(x.hash)
console.log(x.forEvery())
