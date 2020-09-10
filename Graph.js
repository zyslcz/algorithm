function Graph(v) {
    this.vertices = v;//容纳顶点个数
    this.edges = 0;//边
    this.adj = [];//每个顶点提供一个数组容纳对应顶点
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];

    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
function addEdge(v, w) {//增加一条边
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
}
function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log(i + " -> ");
        for (var j = 0; j < this.vertices; ++j ) {
            if (this.adj[i][j] != undefined) {
                console.log(this.adj[i][j] );
            }
        }
        console.log();
    }
}
g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();
console.log(g)
