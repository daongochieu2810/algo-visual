(function(t){function e(e){for(var n,o,a=e[0],u=e[1],c=e[2],d=0,h=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);l&&l(e);while(h.length)h.shift()();return s.push.apply(s,c||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,a=1;a<i.length;a++){var u=i[a];0!==r[u]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="algo-visual/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0732":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-container"},[i("md-app",{attrs:{"md-mode":"reveal"}},[i("md-app-toolbar",{staticClass:"md-primary"},[i("md-button",{staticClass:"md-icon-button",on:{click:function(e){t.menuVisible=!t.menuVisible}}},[i("md-icon",[t._v("menu")])],1),i("span",{staticClass:"md-title"},[t._v("Maze Solver")])],1),i("md-app-drawer",{staticClass:"md-primary",attrs:{"md-active":t.menuVisible},on:{"update:mdActive":function(e){t.menuVisible=e},"update:md-active":function(e){t.menuVisible=e}}},[i("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[t._v("Navigation")]),i("md-list",[i("md-list-item",[i("md-icon",[t._v("move_to_inbox")]),i("span",{staticClass:"md-list-item-text"},[t._v("Algorithm Explanation")])],1),i("md-list-item",[i("md-icon",[t._v("send")]),i("span",{staticClass:"md-list-item-text"},[t._v("Potential Optimization")])],1)],1)],1),i("md-app-content",[i("p",[t._v("Dijsktra")]),i("p",[t._v("Bellman - Ford")]),i("p",[t._v("Prim")]),i("p",[t._v("Kruskal")]),i("p",[t._v("BFS")]),i("grid")],1)],1)],1)},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"grid"}},[i("md-button",{on:{click:t.mazeGenerator}},[t._v(" Generate Maze ")]),i("md-button",{on:{click:t.visualizeDijkstra}},[t._v(" Visualize Dijkstra's Algorithm ")]),i("md-button",{on:{click:t.reset}},[t._v(" Reset ")]),i("table",{staticClass:"grid",staticStyle:{margin:"0"}},[i("tbody",t._l(t.grid,(function(e){return i("tr",{key:e},t._l(e,(function(e){return i("td",{key:e.id},[i("node",{attrs:{col:e.col,row:e.row,isFinish:e.isFinish,isWall:e.isWall,isStart:e.isStart},on:{"down:mouse":t.handleMouseDown,"enter:mouse":t.handleMouseEnter,"up:mouse":t.handleMouseUp}})],1)})),0)})),0)])],1)},a=[],u=(i("99af"),i("4de4"),i("fb6a"),i("5530")),c=i("b85c"),l=i("53ca"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:t.getId,staticClass:"node",class:t.fullClassName,attrs:{id:t.getId},on:{mousedown:function(e){return t.onMouseDown(t.row,t.col)},mouseenter:function(e){return t.onMouseEnter(t.row,t.col)},mouseup:function(e){return t.onMouseUp()}}})},h=[],f=(i("a9e3"),{name:"node",props:{row:Number,col:Number,isFinish:Boolean,isStart:Boolean,isWall:Boolean},computed:{getId:function(){return"node-"+this.row+"-"+this.col},fullClassName:function(){var t=this.isFinish?"node-finish":this.isStart?"node-start":this.isWall?"node-wall":"";return t}},methods:{onMouseDown:function(t,e){this.$emit("down:mouse",t,e)},onMouseEnter:function(t,e){this.$emit("enter:mouse",t,e)},onMouseUp:function(){this.$emit("up:mouse")}}}),m=f,p=(i("5998"),i("0c7c")),v=Object(p["a"])(m,d,h,!1,null,"0606d0f5",null),g=v.exports,b={name:"grid",props:{},components:{Node:g},mounted:function(){for(var t=0;t<20;t++){for(var e=[],i=0;i<70;i++)e.push(this.createNode(t,i));this.grid.push(e)}},data:function(){return{grid:[],tempGrid:[],mouseIsPressed:!1,id:0,START_NODE_ROW:10,START_NODE_COL:15,FINISH_NODE_ROW:10,FINISH_NODE_COL:35,directions:["N","E","S","W"]}},methods:{animateDijkstra:function(t,e){for(var i=this,n=function(n){if(n==t.length)return setTimeout((function(){i.animateShortestPath(e)}),10*n),{v:void 0};setTimeout((function(){var e=t[n];document.querySelector("#node-".concat(e.row,"-").concat(e.col)).className="node node-visited"}),10*n)},r=0;r<=t.length;r++){var s=n(r);if("object"===Object(l["a"])(s))return s.v}},visualizeDijkstra:function(){var t=this.grid[this.START_NODE_ROW][this.START_NODE_COL],e=this.grid[this.FINISH_NODE_ROW][this.FINISH_NODE_COL],i=this.dijkstra(this.grid,t,e),n=this.getNodesInShortestPathOrder(e);this.animateDijkstra(i,n)},createNode:function(t,e){var i=this.id++;return{id:i,col:e,row:t,isStart:t===this.START_NODE_ROW&&e===this.START_NODE_COL,isFinish:t===this.FINISH_NODE_ROW&&e===this.FINISH_NODE_COL,distance:1/0,isVisited:!1,isWall:!1,prevNode:null}},animateShortestPath:function(t){for(var e=function(e){setTimeout((function(){var i=t[e];document.querySelector("#node-".concat(i.row,"-").concat(i.col)).className="node node-shortest-path"}),50*e)},i=0;i<t.length;i++)e(i)},dijkstra:function(t,e,i){var n=[];e.distance=0;var r,s=[],o=Object(c["a"])(t);try{for(o.s();!(r=o.n()).done;){var a,u=r.value,l=Object(c["a"])(u);try{for(l.s();!(a=l.n()).done;){var d=a.value;s.push(d)}}catch(f){l.e(f)}finally{l.f()}}}catch(f){o.e(f)}finally{o.f()}while(s.length){s.sort((function(t,e){return t.distance-e.distance}));var h=s.shift();if(!h.isWall){if(h.distance===1/0)return n;if(h.isVisited=!0,n.push(h),h===i)return n;this.updateUnvisitedNeighbors(h,t)}}},updateUnvisitedNeighbors:function(t,e){var i,n=this.getUnvisitedNeighbors(t,e),r=Object(c["a"])(n);try{for(r.s();!(i=r.n()).done;){var s=i.value;s.distance=t.distance+1,s.prevNode=t}}catch(o){r.e(o)}finally{r.f()}},getUnvisitedNeighbors:function(t,e){var i=[],n=t.row,r=t.col;return n>0&&i.push(e[n-1][r]),n<e.length-1&&i.push(e[n+1][r]),r>0&&i.push(e[n][r-1]),r<e[0].length-1&&i.push(e[n][r+1]),i.filter((function(t){return!t.isVisited}))},getNodesInShortestPathOrder:function(t){var e=[],i=t;while(null!=i)e.unshift(i),i=i.prevNode;return e},getNewGridWithWallToggled:function(t,e,i){var n=this.grid.slice(),r=n[e][i],s=Object(u["a"])({},r,{isWall:!r.isWall});return n[e][i]=s,n},handleMouseDown:function(t,e){var i=this.getNewGridWithWallToggled(this.grid,t,e);this.grid=i,this.mouseIsPressed=!0},handleMouseEnter:function(t,e){if(this.mouseIsPressed){var i=this.getNewGridWithWallToggled(this.grid,t,e);this.grid=i}},handleMouseUp:function(){this.mouseIsPressed=!1},reset:function(){this.grid=[];for(var t=0;t<20;t++){for(var e=[],i=0;i<70;i++)e.push(this.createNode(t,i));this.grid.push(e)}this.mouseIsPressed=!1,this.id=0},recursiveBacktrackingMaze:function(t,e){var i,n,r,s;console.log(t+"reached"+e),this.tempGrid[t][e].isVisited=!0,this.tempGrid[t][e].isWall=!1,this.directions=this.shuffle(this.directions);var o=this.tempGrid[t][e].row,a=this.tempGrid[t][e].col;console.log(o+"  "+a);var u,l=Object(c["a"])(this.directions);try{for(l.s();!(u=l.n()).done;){var d=u.value;switch(d){case"N":r=o-1,s=a,i=o-2,n=a;break;case"W":r=o,s=a-1,i=o,n=a-2;break;case"E":r=o,s=a+1,i=o,n=a+2;break;default:r=o+1,s=a,i=o+2,n=a;break}console.log("reached1"),console.log(i+"  "+n),n>=0&&n<70&&i>=0&&i<20&&!this.tempGrid[i][n].isVisited&&(console.log("reached2"),this.tempGrid[r][s].isWall=!1,this.recursiveBacktrackingMaze(i,n))}}catch(h){l.e(h)}finally{l.f()}},random:function(t){var e=1e4*Math.sin(t);return e-Math.floor(e)},shuffle:function(t){var e,i,n=t.length;while(0!==n)i=Math.floor(this.random(this.id++)*n),n-=1,e=t[n],t[n]=t[i],t[i]=e;return t},mazeGenerator:function(){this.tempGrid=[];for(var t=0;t<20;t++){for(var e=[],i=0;i<70;i++){var n=this.createNode(t,i);n.isStart||n.isFinish||(n.isWall=!0),e.push(n)}this.tempGrid.push(e)}var r=10,s=30,o=[];this.recursiveBacktrackingMaze(r,s);for(var a=0;a<20;a++)for(var u=0;u<70;u++)this.tempGrid[a][u].isVisited=!1,this.grid[a][u]=this.tempGrid[a][u],this.tempGrid[a][u].isWall&&o.push(this.tempGrid[a][u]);for(var c=function(t){setTimeout((function(){var e=o[t];document.querySelector("#node-".concat(e.row,"-").concat(e.col)).className="node node-wall"}),5*t)},l=0;l<o.length;l++)c(l)}}},_=b,O=(i("dd99"),Object(p["a"])(_,o,a,!1,null,"2be7686a",null)),N=O.exports,w={name:"app",data:function(){return{menuVisible:!1}},components:{Grid:N}},y=w,S=(i("c8ec"),Object(p["a"])(y,r,s,!1,null,"6b02a794",null)),k=S.exports,j=i("43f9"),W=i.n(j);i("51de"),i("e094");n["default"].use(W.a),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(k)}}).$mount("#app")},5998:function(t,e,i){"use strict";var n=i("0732"),r=i.n(n);r.a},"7e21":function(t,e,i){},c8ec:function(t,e,i){"use strict";var n=i("d4de"),r=i.n(n);r.a},d4de:function(t,e,i){},dd99:function(t,e,i){"use strict";var n=i("7e21"),r=i.n(n);r.a}});
//# sourceMappingURL=app.c55e4569.js.map