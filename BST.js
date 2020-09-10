class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null
    }
}

class BST {
    constructor() {
        this.root = null
    }

    insert(data) {
        var n = new Node(data);
        if (this.root == null) {
            this.root = n;
        }
        else {
            var current = this.root;
            var parent;
            while (true) {
                parent = current;
                if (data < current.data) {
                    current = current.left;
                    if (current == null) {
                        parent.left = n;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if (current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    find(data) {
        var x = this.root;
        while (x.data != null) {
            if (x.data == data) {
                return x
            } else if (x.data<data) {
                x = x.right
            } else if (x.data>data){
                x = x.left
            }
        }
        return null
    }


}

function levelOrder(root){//不同层将其放在同一高度对应的数组中
    let y = [];
    if (root !== null) {
        y.push(root.data)
        function z(root) {
            if (root.left) {
                y.push(root.left.data);
                if (root.right) {
                    y.push(root.right.data)
                }
                z(root.left);
                z(root.right);
            }
        }
    }
    z(root);
    return y
}
//中序遍历
function inOrder(Node) {
    if (Node != null) {
        inOrder(Node.right);
            console.log(Node.data + " ");//输出数据的位置不同即遍历顺序不同
        inOrder(Node.left);
    }
}



var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log('层次遍历结果：'+levelOrder(nums.root))
console.log('排序结果：')
console.log(inOrder(nums.root))
